import React, { useState } from 'react'
import { IoMapOutline } from 'react-icons/io5'

import ReactMapGL from 'react-map-gl'
import { CardDescription } from '../widgets/card/'

interface localizationProps {
  localization: string
  direction: string
}

export const MapLocalization = ({
  localization,
  direction,
}: localizationProps) => {
  const coords = localization.split(',')
  /* const { viewport, setViewport, mapboxglAccessToken } = useDirectionsMap(
    parseFloat(coords[1]),
    parseFloat(coords[0]),
  ) */
  const [viewport, setViewport] = useState({
    longitude: parseFloat(coords[1]),
    latitude: parseFloat(coords[0]),
    zoom: 16,
  })
  console.log(viewport.longitude, viewport.latitude);
  const mapboxglAccessToken = process.env.NEXT_PUBLIC_MAPBOX_KEY

  return (
    <CardDescription className="location" title="Localizacion">
      <div className="flex info-category">
        <div className="flex icon-info">
          <div className="icono">
            <IoMapOutline width="20px" height="20px" />
          </div>
          <label
            htmlFor=""
            style={{
              marginLeft: '0.5rem',
            }}
          >
            Direccion{' '}
          </label>
        </div>
        <div className="spacer"></div>
        <div className="">{direction}</div>
      </div>

      <div
        className="map"
        style={{
          width: '100%',
          marginTop: '2rem',
          height: '450px',
        }}
      >
        <a
          href={`https://www.google.com.bo/maps/@${viewport.latitude},${viewport.longitude},17z?hl=es`}
          target="blank"
        >
          <ReactMapGL
            {...viewport}
            width="100%"
            height="100%"
            onViewportChange={setViewport}
            mapboxApiAccessToken={mapboxglAccessToken}
            mapStyle="mapbox://styles/mapbox/streets-v11"
          >
            {/* <Marker
                        latitude={viewport.latitude}
                        longitude={viewport.longitude}
                        >
                        <Navigate
                        width="30px"
                        height="30px"
                        />
                    </Marker> */}
          </ReactMapGL>
        </a>
      </div>
    </CardDescription>
  )
}
