import { DatePicker, Flex, Space, Typography } from 'antd'
import { ArrowRightOutlined } from '@ant-design/icons'
import dayjs from 'dayjs'
import './style.css'
import { Link } from 'react-router-dom'
import Workload from '../../common/Workload'

const Dashboard = () => {
  const { Title, Text } = Typography
  const { RangePicker } = DatePicker

  const dateFormat = 'YYYY-MM-DD'

  return (
    <>
      <div className='dashboard'>
        <Text type='secondary'>Welcome back, Evan!</Text>
        <Flex justify='space-between' align='center'>
          <Title level={2} style={{ fontWeight: 600 }}>
            DashBoard
          </Title>

          <RangePicker
            style={{ marginTop: 16, width: 280, height: 48 }}
            size='middle'
            defaultValue={[
              dayjs('2024-09-03', dateFormat),
              dayjs('2025-11-22', dateFormat),
            ]}
          />
        </Flex>

        <div className='card__info'>
          <div className='card__info__title'>
            <h2 style={{ fontWeight: 600 }}>Workload</h2>
            <Space>
              <Link to={'/viewAll'}>
                <Text type='secondary'>View All</Text>
              </Link>
              <ArrowRightOutlined />
            </Space>
          </div>
          <Workload />
        </div>
      </div>
    </>
  )
}

export default Dashboard
