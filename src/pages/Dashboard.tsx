import React from 'react'
import { compose } from 'ramda'
import FullLayout from '../feature/FullLayout'
import { withAuth } from '../hoc/withAuth'

const Dashboard: React.FC = () => {
    return <FullLayout>content</FullLayout>
}

export default compose(withAuth)(Dashboard)
