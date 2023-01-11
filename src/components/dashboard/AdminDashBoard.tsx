import React, { useContext, useState, useEffect } from 'react'

import { v4 as uuidv4 } from 'uuid'

import { accountsLink } from '../../../src/data/infoData'
import { useDocumentTitle } from '../../../src/hooks/useDocumentTitle'
import { useWindowSize } from '../../../src/hooks/useWindows'
import { NavLink } from '../../../src/components/text/NavLink'
import { IconContext } from 'react-icons'
import { FaBars, FaTimes } from 'react-icons/fa'

interface AdminDashBoardProps {
  children: React.ReactNode
}
function AdminDashBoard({ children }: AdminDashBoardProps) {
  const [openMenu, setOpenMenu] = useState(false)
  /* const { logOut } = useContext(AuthAdminContext) */

  const { windowSize } = useWindowSize()
  const handleToogleMenu = () => {
    setOpenMenu(!openMenu)
  }
  useEffect(() => {
    if (windowSize.width < 768) {
      setOpenMenu(true)
    } else {
      setOpenMenu(false)
    }
  }, [windowSize.width])
  useDocumentTitle('dashboard')

  const goToLink = () => {
    if (windowSize.width < 768) {
      handleToogleMenu()
    }
  }
  return (
    <>
      <div className="toolbar">
        <IconContext.Provider
          value={{ className: 'Sidebar__icon1', size: '2.5rem' }}
        >
          <div onClick={() => setOpenMenu(!openMenu)}>
            {!openMenu ? <FaTimes /> : <FaBars />}
          </div>
        </IconContext.Provider>

        <h4>Panel de administracion</h4>
      </div>
      <div className="dashboard">
        <div className={`dash ${openMenu ? 'open-menu' : 'close-menu'}`}>
          <div className="profile-image">
            <img
              className="profile-image-img"
              src="https://t4.ftcdn.net/jpg/03/40/12/49/360_F_340124934_bz3pQTLrdFpH92ekknuaTHy8JuXgG7fi.jpg"
              alt=""
            />
            <span className="profile-image-name">Nombre de Usuario</span>
          </div>
          <div className="dash-group">
            {accountsLink.map(({ title_group, items }) => (
              <div key={uuidv4()}>
                <span className="title-dash">{title_group}</span>

                {items.map(({ to, icon, title }) => (
                  <NavLink
                    key={uuidv4()}
                    /* className="dash-item" */
                    activeClassName="active"
                    onClick={goToLink}
                    href={to}
                  >
                    <div className="dash-item">
                      {icon}
                      <span
                        style={{
                          marginLeft: '10px',
                        }}
                      >
                        {title}
                      </span>
                    </div>
                  </NavLink>
                ))}
              </div>
            ))}
          </div>
          <span className="title-dash">Empleados</span>
          <div className="dash-group">
            <ul className="dash-item">Salir</ul>
          </div>
        </div>
        <div className="dash-content">{children}</div>
      </div>
    </>
  )
}
export default AdminDashBoard
