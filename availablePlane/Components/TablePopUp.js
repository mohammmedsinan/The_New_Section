import React from 'react'
import { Table } from 'antd'
import { EditFilled, DeleteFilled } from '@ant-design/icons'

const { Column } = Table

const data = [
  {
    key: '1',
    PeriodTitle: 'First Period',
    Period: '01:00PM - 08:00PM',
    PeriodInterval: '00:30',
  },
  {
    key: '2',
    PeriodTitle: 'Second Period',
    Period: '01:00PM - 08:00PM',
    PeriodInterval: '00:30',
  },
  {
    key: '3',
    PeriodTitle: 'Third Period',
    Period: '01:00PM - 08:00PM',
    PeriodInterval: '00:30',
  },
]
function TablePopUp() {
  return (
    <Table dataSource={data}>
      <Column title="Period Title" dataIndex="PeriodTitle" key="Period-Title" />
      <Column title="Period" dataIndex="Period" key="Period" />
      <Column
        title="Period Interval"
        dataIndex="PeriodInterval"
        key="Period-Interval"
      />
      <Column
        title="Control"
        key="Control"
        render={(text, record) => (
          <>
            <EditFilled
              style={{
                cursor: 'pointer',
                color: '#0FB5C4',
                padding: '3px',
                backgroundColor: '#F2F4F6',
              }}
            />
            <DeleteFilled
              style={{
                cursor: 'pointer',
                color: '#0FB5C4',
                padding: '3px',
                margin: '0px 5px',
                backgroundColor: '#F2F4F6',
              }}
            />
          </>
        )}
      />
    </Table>
  )
}

export default TablePopUp
