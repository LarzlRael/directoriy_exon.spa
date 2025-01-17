import React, { useContext, useState, useEffect } from 'react'

import { v4 as uuidv4 } from 'uuid'

import { accountsLink } from '../../src/data/infoData'
import { useDocumentTitle } from '../../src/hooks/useDocumentTitle'
import { useWindowSize } from '../../src/hooks/useWindows'
import { NavLink } from '../../src/components/text/NavLink'
import { IconContext } from 'react-icons'
import { FaBars, FaEdit, FaTimes } from 'react-icons/fa'
import useAxiosAuth from '../../src/hooks/useAxiosAuth'
import { PymesResponseInterface } from '../../src/interfaces/pymesResponseInterface'
import {
  preconfigArray,
  validateArray,
} from '../../src/components/utils/validation/validation'

import { PymeCard } from '../../src/components/widgets/card/PymeCard'
import { Label } from '../../src/components/text/Label'
import { AdminDashBoard } from '../../src/components/dashboard/AdminDashBoard'
import { GridContainer } from '../productos/[main]'
import {
  Loading,
  LoadingExpanded,
} from '../../src/components/widgets/loadings/Loading'
import { useVerifyLogginHook } from '../../src/hooks/useVerifyLoggingHook'
import { GlobalForm } from '../../src/components/forms/GlobalForm'
import { firstExample } from '../../src/components/input/formPaterns'
import TableMain from '../../src/components/table/TableMain'
import { useRouter } from 'next/router'

function adminDashboard() {
  useVerifyLogginHook()
  const [openMenu, setOpenMenu] = useState(false)
  /* const { logOut } = useContext(AuthAdminContext) */
  const { response: allPymes, loading, reload } = useAxiosAuth<
    PymesResponseInterface[]
  >({
    url: '/pymes/adminpymes',
    method: 'GET',
  })
  const router = useRouter()
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

  /* const goToLink = () => {
    if (windowSize.width < 768) {
      handleToogleMenu()
    }
  } */
  return (
    <AdminDashBoard>
      {!loading ? (
        validateArray(preconfigArray(allPymes)) ? (
          <GridContainer className="cards-container">
            {preconfigArray(allPymes).map((pyme) => (
              <PymeCard
                pymeInterfaceResponse={pyme}
                key={pyme._id}
                isAdmin={true}
              />
            ))}
          </GridContainer>
        ) : (
          <Label textAlign="center" display="block">
            No se encontraron resultados
          </Label>
        )
      ) : (
        <LoadingExpanded />
      )}
    </AdminDashBoard>
  )
}
export default adminDashboard


{/* <TableMain
          header={[
            { key: 'nombre', name: 'Nombre del curso' },
            { key: 'email', name: 'Email' },
            { key: 'telefono', name: 'Telefono' },
            { key: 'direccion', name: 'Direccion' },
            { key: 'createdAt', name: 'Usuario desde', type: 'date' },
            {
              key: 'action',
              name: 'Acciones',
              type: 'actions',
              actions: [
                {
                  labelTooltip: 'Editar información',
                  action: (e) => {
                    router.push(`/auth/pyme/${e._id}`)
                  },
                  icon: <FaEdit color="orange" />,
                },
              ],
            },
            
          ]}
          main={preconfigArray(allPymes)}
          
        /> */}