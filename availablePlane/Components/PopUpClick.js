import React, { useState } from 'react'
import Calendar from './Calendar'
import FormPopup from './FormPopup'
import TablePopUp from './TablePopUp'
import { Button, Modal, Popover } from 'antd'
import { CopyFilled } from '@ant-design/icons'
import './style.css'
import CopyAvailability from './CopyAvailability'

const PopUpClick = () => {
  const [isModalVisible, setIsModalVisible] = useState(false)

  const showModal = () => {
    setIsModalVisible(true)
  }

  const handleOk = () => {
    setIsModalVisible(false)
  }

  const handleCancel = () => {
    setIsModalVisible(false)
  }
  return (
    <div>
      <div style={{ display: 'flex' }}>
        <CopyAvailability />
        <Button
          style={{
            background: 'linear-gradient(360deg , #0FB5C4 ,#0FB5C4)',
            color: 'white',
            borderRadius: '5px',
          }}
          onClick={showModal}
        >
          Manage Periods
          <CopyFilled />
        </Button>
      </div>
      <Modal
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        width={750}
        okText="Save"
        cancelText="Cancel"
        okButtonProps={{
          style: {
            backgroundColor: '#181C36',
            padding: '0px 40px',
            fontWeight: 'bold',
            color: 'white',
            border: '0px',
          },
        }}
        cancelButtonProps={{
          style: {
            backgroundColor: 'white',
            padding: '0px 40px',
            border: '1px solid #181C36',
            color: '#181C36',
            fontWeight: 'bold',
          },
        }}
      >
        <h1 style={{ textAlign: 'center', paddingTop: '50px' }}>
          Mange Periods
        </h1>
        <Calendar
          width="10%"
          height="80px"
          horizantalLine={{
            borderTop: '1px solid #EEF2F4',
            borderBottom: '1px solid #EEF2F4',
            margin: '25px 0px',
          }}
        />
        <div style={{ padding: '20px 0px', margin: '0px 30px' }}>
          <FormPopup />
          <TablePopUp />
        </div>
      </Modal>
    </div>
  )
}

export default PopUpClick
