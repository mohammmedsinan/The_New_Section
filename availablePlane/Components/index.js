import { Card } from 'antd'
import React from 'react'
import Calendar from './Calendar'
import DataTable from './DataTable'
import PopUpClick from './PopUpClick'

const HeaderComponent = () => {
  //function return html to make the file more cleaner
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        padding: '0px',
      }}
    >
      <p style={{ margin: '0px', fontWeight: 'bold', fontSize: '16px' }}>
        Available Plan - Dr.{`Hazem Mohammed`}
      </p>
      <p
        style={{
          color: 'gray',
          fontSize: '11px',
          padding: '0px',
          margin: '0px',
          textAlign: 'end',
        }}
      >
        Mange Date & Time PLan
      </p>
    </div>
  )
}
function index() {
  return (
    <div
      style={{ display: 'flex', justifyContent: 'center', margin: '10px 0px' }}
    >
      <Card
        extra={HeaderComponent()}
        title={PopUpClick()}
        style={{ width: 1000, height: 'auto' }}
      >
        <Calendar width={'6%'} height={'75px'} />
        {/* if the component return null without data will display empty default page by using antd*/}
        <DataTable />
      </Card>
    </div>
  )
}

export default index
