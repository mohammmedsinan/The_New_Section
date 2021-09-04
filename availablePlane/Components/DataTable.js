import { Button, Empty, Popover } from 'antd'
import React, { useState } from 'react'
import './style.css'

function DataTable() {
  const [data, setData] = useState([
    {
      title: 'First Period title',
      timing: ['08:00 - 08:30', '08:00 - 08:30', '08:00 - 08:30'],
    },
    {
      title: 'Second Period title',
      timing: [
        '08:00 - 08:30',
        '08:00 - 08:30',
        '08:00 - 08:30',
        '08:00 - 08:30',
        '08:00 - 08:30',
        '08:00 - 08:30',
        '08:00 - 08:30',
        '08:00 - 08:30',
        '08:00 - 08:30',
        '08:00 - 08:30',
      ],
    },
    {
      title: 'Third Period title',
      timing: ['08:00 - 08:30', '08:00 - 08:30', '08:00 - 08:30'],
    },
  ])
  const Circle = ({ color }) => {
    return (
      <div
        style={{
          height: '10px',
          width: '10px',
          backgroundColor: color,
          borderRadius: '50%',
          display: 'block',
        }}
      ></div>
    )
  }
  return (
    <div>
      {data.length > 0 ? (
        <div
          style={{ direction: 'ltr', padding: '0px 20px', marginTop: '30px' }}
        >
          {data.map((ThePeriods) => {
            return (
              <div key={ThePeriods.title}>
                <div
                  style={{
                    backgroundColor: '#F4F5F5',
                    color: '#03103a',
                    fontSize: '18px',
                    fontWeight: 'bold',
                    padding: '5px 10px',
                  }}
                >
                  {ThePeriods.title}
                </div>
                <div
                  style={{
                    margin: '20px 5px',
                    display: 'flex',
                    flexWrap: 'wrap',
                  }}
                >
                  {ThePeriods.timing.map((Times) => {
                    return (
                      <Popover
                        key={Math.floor(Math.random() * 99999)}
                        placement="bottom"
                        content={
                          <div
                            style={{
                              display: 'flex',
                              flexDirection: 'column',
                              alignItems: 'flex-end',
                              justifyContent: 'center',
                            }}
                          >
                            <div
                              style={{
                                cursor: 'pointer',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                flexDirection: 'row-reverse',
                              }}
                            >
                              <Circle color="green" />
                              <div style={{ marginLeft: '10px' }}>
                                Available
                              </div>
                            </div>
                            <div
                              style={{
                                cursor: 'pointer',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                flexDirection: 'row-reverse',
                              }}
                            >
                              <Circle color="gray" />
                              <div style={{ marginLeft: '10px' }}>
                                Un Available
                              </div>
                            </div>
                            <div
                              style={{
                                cursor: 'pointer',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                flexDirection: 'row-reverse',
                              }}
                            >
                              <Circle color="red" />
                              <div style={{ marginLeft: '10px' }}>Cancel</div>
                            </div>
                          </div>
                        }
                      >
                        <div
                          style={{
                            cursor: 'pointer',
                            border: '2px solid #F8F7F7',
                            padding: '6px 20px',
                            margin: '10px 15px',
                            borderRadius: '10px',
                          }}
                        >
                          {Times}
                        </div>
                      </Popover>
                    )
                  })}
                </div>
              </div>
            )
          })}
        </div>
      ) : (
        <Empty
          image={null}
          description={
            <>
              <div
                style={{
                  backgroundColor: '#020203',
                  color: 'white',
                  padding: '25px 100px',
                }}
              >
                You should set Periods by click message Periods
              </div>
            </>
          }
          style={{
            backgroundColor: '#F4F5F5',
            height: '300px',
            marginTop: '20px',
            borderRadius: '10px',
          }}
        />
      )}
    </div>
  )
}

export default DataTable
