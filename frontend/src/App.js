import React, { useState, useEffect } from 'react'
//import Notification from './components/Notification'
import loginService from './services/login'
import sectorConfService from './services/sectorconf'
import diaryService from './services/diary'
import MapConfs from './components/MapConfs'
import DiaryMessage from './components/DiaryMessage'
import SecConfMessage from './components/SecConfMessage'
import './App.css'
import logic from './logic/sectorConfs'
import { API_URL } from './config'

const initialSectorization = [
  {
    eette: 0,
    eettw: 0,
    eettfed: 0
  },
  {
    efina: 0,
    efinb: 0,
    efinc: 0,
    efind: 0,
    efine: 0,
    efinf: 0,
    efing: 0,
    efinh: 0,
    efinj: 0,
    efink: 0,
    efinl: 0,
    efinm: 0,
    efinn: 0,
    efinv: 0,
  }
]

const App = () => {
  const [ listening, setListening ] = useState(false)
  const [ sectorconfs, setSectorConfs] = useState([])
  const [ diary, setDiary ] = useState([])
  const [ userObject, setUserObject] = useState(null)
  const [ username, setUsername] = useState('')
  const [ password, setPassword] = useState('')
  const [ eventSrc, setEventSrc] = useState(null)
  const [ sectorColors, setSectorColors] = useState(initialSectorization)

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('loggedUser')
    if (loggedUserJSON) {
      const loggedUser = JSON.parse(loggedUserJSON)
      setUserObject(loggedUser)
    }
  }, [])

  const initializeEventSource = () => {
    const events = new EventSource( API_URL + '/events')

    events.onopen = () => {
      console.log('The EventSource connection has been established.')
      setEventSrc(events)
      setListening(true)
    }

    events.onmessage = (event) => {
      if (event.id === 'CLOSE') {
        events.close()
        setListening(false)
      }
      const parsedData = JSON.parse(event.data)
      if (parsedData.type === 'diary') {
        setDiary((diary) => [parsedData.message].concat(diary))
      }
      if (parsedData.type === 'secConf') {
        setSectorConfs((sectorconfs) => [parsedData].concat(sectorconfs))
        setConfInDisplay(parsedData.country, parsedData.title)
      }
    }

    events.onerror = () => {
      console.log('EventSource connection error')
      events.close()
      setListening(false)
    }
  }

  const initializeSectors = async () => {
    const sectordata = await sectorConfService.getAll()
    setSectorConfs(sectordata)
    sectordata.forEach(item => {
      console.log('Setting conf colors: ' + item.country + ', ' + item.title)
      setConfInDisplay(item.country, item.title)
    })
    const diarydata = await diaryService.getAll()
    setDiary(diarydata)
  }

  useEffect(() => {
    if (!listening && userObject) {
      initializeSectors()
      initializeEventSource()
    }
  }, [listening, userObject])

  const handleLogin = async (event) => {
    event.preventDefault()
    try {
      const userObject = await loginService.login({
        username, password,
      })
      localStorage.setItem('token', userObject.token)
      window.localStorage.setItem('loggedUser', JSON.stringify(userObject))
      console.log('logged in as', userObject.username)
      setUserObject(userObject)
      setUsername('')
      setPassword('')
    } catch (exception) {
      console.log('exception logging in', exception)
      setUsername('')
      setPassword('')
    }
  }

  const handleLogout = () => {
    window.localStorage.clear()
    setUserObject(null)
    if (eventSrc) {
      eventSrc.close()
      setListening(false)
    }
  }

  const handleChangeConf = async (country, conf) => {
    const confObject = {
      title: conf,
      country,
      effectiveAt: new Date().toUTCString(),
      issuer: userObject.username,
      comment: ''
    }
    await sectorConfService.create(confObject)
    setConfInDisplay(country, conf)
  }

  const setConfInDisplay = (country, conf) => {
    const newSectorization = logic.sectorConfsColors(country, conf)
    if (country === 'EE') {
      setSectorColors((sectorColors) => [{ ...newSectorization }, sectorColors[1]])
    }
    if (country === 'EF') {
      setSectorColors(sectorColors => [sectorColors[0], { ...newSectorization }])
    }
  }

  const LoggedOut = () => (
    <div className="columns is-centered">
      <div className="column is-half">
        <article className="message is-info">
          <div className="message-header">
            <p>Welcome! Please log in.</p>
          </div>
          <div className="message-body">
            <div className="content">
              <form>
                <div className="field">
                  <label className="label">Username</label>
                  <div className="control">
                    <input className="input" value={username} onChange={(e) => setUsername(e.target.value)}/>
                  </div>
                </div>
                <div className="field">
                  <label className="label">Password</label>
                  <div className="control">
                    <input className="input" type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                  </div>
                </div>
                <div className="field">
                  <div className="control">
                    <button type="submit" className="button is-primary is-large"  onClick={(e) => handleLogin(e)}>Login</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </article>
      </div>
    </div>
  )

  const LoggedIn = () => (
    <>
      <div className="columns is-centered">
        <div className="column">
          <div className="card">
            <header className="card-header has-background-info">
              <p className="card-header-title is-centered has-text-white">
                Diary
              </p>
            </header>
            <div className="card-content">
              <div className="content">
                {diary.slice(0,10).map((item,index) => (
                  <DiaryMessage key={index} msg={item}/>
                )
                )}
              </div>
            </div>
            <footer className="card-footer">
              <a href="#" className="card-footer-item">Button1</a>
              <a href="#" className="card-footer-item">Button2</a>
              <a href="#" className="card-footer-item">Button3</a>
            </footer>
          </div>
        </div>
        <div className="column">
          <div className="card">
            <header className="card-header has-background-info">
              <p className="card-header-title is-centered has-text-white">
                Sector Configuration
              </p>
            </header>
            <div className="card-content">
              <div className="columns">
                <div className="column">
                  <MapConfs colors={sectorColors}/>
                </div>
                <div className="column">
                  <p>EFIN</p>
                  <button className="button is-small" onClick={() => handleChangeConf('EF', 'CONF1')}>CONF1</button>
                  <button className="button is-small" onClick={() => handleChangeConf('EF', 'CONF2')}>CONF2</button>
                  <button className="button is-small" onClick={() => handleChangeConf('EF', 'CONF2A')}>CONF2A</button>
                  <button className="button is-small" onClick={() => handleChangeConf('EF', 'CONF2B')}>CONF2B</button>
                  <p>EETT</p>
                  <button className="button is-small" onClick={() => handleChangeConf('EE', 'CONF1')}>CONF1</button>
                  <button className="button is-small" onClick={() => handleChangeConf('EE', 'CF2')}>CF2</button>
                  <button className="button is-small" onClick={() => handleChangeConf('EE', 'CF2A')}>CF2A</button>
                  <button className="button is-small" onClick={() => handleChangeConf('EE', 'CF3A')}>CF3A</button>
                  <button className="button is-small" onClick={() => handleChangeConf('EE', 'CF3B')}>CF3B</button>
                  <button className="button is-small" onClick={() => handleChangeConf('EE', 'CF5')}>CF5</button>
                  {sectorconfs.slice(0,10).map((item,index) => (
                    <SecConfMessage key={index} msg={item}/>
                  ))}
                </div>
              </div>
            </div>
            <footer className="card-footer">
              <a href="#" className="card-footer-item">Button1</a>
              <a href="#" className="card-footer-item">Button2</a>
              <a href="#" className="card-footer-item">Button3</a>
            </footer>
          </div>
        </div>
      </div>
      <div className="columns is-centered">
        <div className="column is-half">
          <div className="level">
            <span>Logged in as <strong>{userObject.username}</strong></span>
            <button className="button is-small" onClick={() => handleLogout()}>Logout</button>
            <span>Listening on Event Stream: {listening ? 'YES' : 'NO'}</span>
            {!listening && (<button className="button is-small is-danger" onClick={() => setListening(null)}>Reconnect</button>)}
          </div>
        </div>
      </div>
    </>
  )

  return (
    <div className="section">
      <div className="container">
        {userObject ? LoggedIn() : LoggedOut() }
      </div>
    </div>
  )
}

export default App