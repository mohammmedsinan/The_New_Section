import { CalendarFilled } from '@ant-design/icons'
import { Button, Popover } from 'antd'
import PopUpForm from './PopUpForm'
import React from 'react'
function CopyAvailability() {
  return (
    <div>
      <Popover
        style={{ zIndex: 10 }}
        placement="bottom"
        content={() => (
          <>
            <PopUpForm
              MainName="Copy Week Availability"
              ExtraFetcher
              firstLabelName="Select Week"
              secondLabelName="Paste to the Week"
              PopoverName="Copy Week"
              // OnClickOk={() => null}
            />
            <PopUpForm
              MainName="Copy Day Availability"
              firstLabelName="Select Day"
              secondLabelName="Paste to the Date"
              PopoverName="Copy Day"
              // OnClickOk={() => null}
            />
          </>
        )}
      >
        <Button
          style={{
            backgroundColor: '#03103A',
            color: 'white',
            borderRadius: '5px',
            marginLeft: '10px',
          }}
        >
          Copy Availability
          <CalendarFilled />
        </Button>
      </Popover>
    </div>
  )
}

export default CopyAvailability
