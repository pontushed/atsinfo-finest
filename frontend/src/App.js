import React, { useState, useEffect } from 'react'
//import Notification from './components/Notification'
import loginService from './services/login'
import sectorConfService from './services/sectorconf'
import diaryService from './services/diary'
import MapConfs from './components/MapConfs'
import './App.css'
import logic from './logic/sectorConfs'

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

  useEffect(() => {
    if (userObject) {
      sectorConfService.getAll().then(data => {
        setSectorConfs(data)
      })
      diaryService.getAll().then(data => {
        setDiary(data)
      })
    }
  }, [userObject])

  useEffect(() => {
    if (!listening && userObject) {
      const events = new EventSource('http://localhost:3001/api/events')
      setEventSrc(events)

      events.onmessage = (event) => {
        const parsedData = JSON.parse(event.data)
        handleMessage(parsedData)
      }
      setListening(true)
    }
  }, [listening, userObject])

  const handleMessage = (data) => {
    if (data.type === 'diary') {
      setDiary(diary.concat(data.message))
    }
    if (data.type === 'sectorConf') {
      setSectorConfs(sectorconfs.concat(data.message))
    }
  }

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

  const handleChangeConf = (country, conf) => {
    const newSectorization = logic.sectorConfsColors(country, conf)
    if (country == 'EE') {
      setSectorColors([{...newSectorization}, sectorColors[1]])
    }
    if (country == 'EF') {
      setSectorColors([sectorColors[0], {...newSectorization}])
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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.
                <a href="#">@bulmaio</a>. <a href="#">#css</a> <a href="#">#responsive</a>
                <br/>
                <time dateTime="2016-1-1">11:09 PM - 1 Jan 2016</time>
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
        <div className="column is-one-third">
          <div className="level">
          <span>Logged in</span>
          <button className="button is-small" onClick={() => handleLogout()}>Logout</button>
          <span>Listening on Event Stream: {listening ? 'YES' : 'NO'}</span>
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