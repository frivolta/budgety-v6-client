import React from 'react'
import { compose } from 'ramda'
import FullLayout from '../feature/FullLayout'
import { withoutAuth } from '../hoc/withoutAuth'
import { routes } from '../routes/routes'

const Unprotected: React.FC = () => {
    return <FullLayout title={routes.unprotected.name}>unprotected</FullLayout>
}

export default compose(withoutAuth)(Unprotected)
