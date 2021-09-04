import React, { useState } from 'react'
import { DatePicker, Modal } from 'antd'

function PopUPForm({
  MainName = '',
  ExtraFetcher = false,
  firstLabelName = '',
  secondLabelName = '',
  PopoverName = '',
  OnClickOk,
}) {
  const [isModalVisible, setIsModalVisible] = useState(false)

  const showModal = () => {
    setIsModalVisible(true)
  }

  const handleCancel = () => {
    setIsModalVisible(false)
  }
  const Circle = ({ color }) => {
    return (
      <div
        style={{
          height: '10px',
          width: '10px',
          backgroundColor: color,
          borderRadius: '50%',
          display: 'block',
          marginRight: '10px',
        }}
      ></div>
    )
  }
  return (
    <>
      <div
        onClick={showModal}
        style={{
          marginBottom: '10px',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'row-reverse',
          justifyContent: 'flex-start',
        }}
      >
        <Circle color="black" />
        <div>{PopoverName}</div>
      </div>
      <Modal
        style={{ zIndex: 99999999999999999999999999999999 }}
        title={
          <p style={{ textAlign: 'center', fontWeight: 'bold' }}>{MainName}</p>
        }
        width="60%"
        visible={isModalVisible}
        onOk={() => {
          setIsModalVisible(false) & OnClickOk()
        }}
        onCancel={handleCancel}
      >
        <div>
          {ExtraFetcher && (
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-evenly',
                marginTop: '10px',
                borderBottom: '1px solid #EEF2F4',
              }}
            >
              <p style={{ fontWeight: 'bold' }}>Select Last week</p>
              <p style={{ color: '#0FB5C4', fontWeight: 'bold' }}>
                Custom Week
              </p>
            </div>
          )}
          <div
            style={{
              height: '150px',
              display: 'flex',
              flexDirection: 'row-reverse',
              alignItems: 'center',
              justifyContent: 'space-evenly',
            }}
          >
            <div
              style={{
                display: 'flex',
                height: '100%',
                flexDirection: 'column',
                justifyContent: 'inherit',
                alignItems: 'flex-end',
              }}
            >
              <label>{firstLabelName}</label>
              <label>{secondLabelName}</label>
            </div>
            <div
              style={{
                display: 'flex',
                height: '100%',
                flexDirection: 'column',
                justifyContent: 'inherit',
                alignItems: 'flex-end',
              }}
            >
              <DatePicker style={{ width: '250px' }} />
              <DatePicker style={{ width: '250px' }} />
            </div>
          </div>
        </div>
      </Modal>
    </>
  )
}

export default PopUPForm
