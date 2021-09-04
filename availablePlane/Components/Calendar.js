import React from 'react'
import { ArrowLeftOutlined, ArrowRightOutlined } from '@ant-design/icons'

function Calendar({ width, height, horizantalLine }) {
  const [days, setDays] = React.useState([
    { day: 'Mon', dayInMonth: 28, Selected: false },
    { day: 'Tue', dayInMonth: 29, Selected: false },
    { day: 'Wed', dayInMonth: 30, Selected: false },
    { day: 'Thu', dayInMonth: 1, Selected: true },
    { day: 'Fri', dayInMonth: 2, Selected: false },
    { day: 'Sat', dayInMonth: 3, Selected: false },
    { day: 'Sun', dayInMonth: 4, Selected: false },
  ])
  const [week, setWeek] = React.useState('Week 1 April 2021')
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        marginBottom: '50px',
        marginTop: '20px',
      }}
    >
      <div
        style={{
          textAlign: 'center',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'baseline',
          ...horizantalLine,
          marginBottom: '20px',
        }}
      >
        <ArrowRightOutlined
          style={{
            border: '1px solid gray',
            padding: '3px',
            borderRadius: '100%',
            marginLeft: '8px',
            cursor: 'pointer',
          }}
        />
        <p
          style={{
            display: 'inline',
            color: '#03103A',
            fontSize: '18px',
            fontWeight: 'bold',
            marginBottom: '20px',
            margin: '0px',
            padding: '10px 0px',
          }}
        >
          {week}
        </p>
        <ArrowLeftOutlined
          style={{
            border: '1px solid gray',
            borderRadius: '100%',
            marginRight: '8px',
            padding: '3px',

            cursor: 'pointer',
          }}
        />
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'row-reverse',
        }}
      >
        {days.map((theDays) => {
          return (
            <>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  border: '2px solid #F8F7F7',
                  borderRadius: '8px',
                  margin: '0px 5px',
                  width: width,
                  height: height,
                  justifyContent: 'space-evenly',
                  background: theDays.Selected
                    ? 'linear-gradient(360deg , #00B3D2 ,#00B3D2)'
                    : null,
                  cursor: 'pointer',
                  color: theDays.Selected ? 'white' : 'black',
                }}
              >
                <span style={{ fontWeight: 'bold' }}>{theDays.day}</span>
                <span style={{ fontWeight: 'bold', fontSize: '16px' }}>
                  {theDays.dayInMonth}
                </span>
              </div>
            </>
          )
        })}
      </div>
    </div>
  )
}

export default Calendar
