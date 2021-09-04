import React from 'react'
import { Button, Input, TimePicker } from 'antd'

function FormPopup() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginBottom: '20px',
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'row-reverse',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            flexDirection: 'column',
            height: '120px',
            marginRight: '90px',
          }}
        >
          <label style={{ fontWeight: 'bold', fontSize: '15px' }}>
            Period Title
          </label>
          <label style={{ fontWeight: 'bold', fontSize: '15px' }}>
            Period Time
          </label>
          <label style={{ fontWeight: 'bold', fontSize: '15px' }}>
            Period Interval
          </label>
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexDirection: 'column',
            height: '120px',
          }}
        >
          <Input
            placeholder="Title"
            style={{ backgroundColor: '#F1F4F6' }}
            style={{
              width: '400px',
              backgroundColor: '#F1F4F6',
              direction: 'ltr',
            }}
          />
          <TimePicker.RangePicker
            style={{ backgroundColor: '#F1F4F6' }}
            style={{
              width: '400px',
              backgroundColor: '#F1F4F6',
              direction: 'ltr',
            }}
          />
          <TimePicker
            style={{ backgroundColor: '#F1F4F6' }}
            style={{
              width: '400px',
              backgroundColor: '#F1F4F6',
              direction: 'ltr',
            }}
          />
        </div>
      </div>
      <div style={{ marginTop: '20px' }}>
        <Button
          style={{
            color: '#181C36',
            backgroundColor: 'white',
            border: '1px solid #181C36',
            width: '121px',
            height: '35px',
            borderRadius: '9px',
            marginLeft: '10px',
          }}
        >
          Cancel
        </Button>
        <Button
          style={{
            color: 'white',
            backgroundColor: '#181C36',
            width: '121px',
            height: '35px',
            borderRadius: '9px',
            marginLeft: '40px',
          }}
        >
          Add
        </Button>
      </div>
    </div>
  )
}

export default FormPopup
