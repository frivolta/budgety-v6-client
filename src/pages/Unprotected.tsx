import React from 'react'
import { compose } from 'ramda'
import FullLayout from '../feature/FullLayout'
import { withoutAuth } from '../hoc/withoutAuth'

const Unprotected: React.FC = () => {
    return <FullLayout>unprotected</FullLayout>
}

export default compose(withoutAuth)(Unprotected)
