/* global expect, describe, it */
import 'react-native'
import React from 'react'
import renderer from 'react-test-renderer'

import Badge from './index'

const badgeSnapshot = () => {
  const props = {
    popRoute: jest.fn(),
    openDrawer: jest.fn()
  }

  const tree = renderer.create(
    <Badge {...props} />
  ).toJSON()

  expect(tree).toMatchSnapshot()
}

describe('Badge trees snapshots', () => {
  it('should match for Badge component', badgeSnapshot)
})

