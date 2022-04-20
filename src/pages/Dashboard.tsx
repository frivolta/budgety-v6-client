import React from 'react'
import { compose } from 'ramda'
import FullLayout from '../feature/FullLayout'
import { withAuth } from '../hoc/withAuth'
import { routes } from '../routes/routes'

const Dashboard: React.FC = () => {
    return <FullLayout title={routes.dashboard.name}>content</FullLayout>
}

export default compose(withAuth)(Dashboard)
