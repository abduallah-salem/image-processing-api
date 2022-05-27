import { AddressInfo } from 'net'
import server from '../index'

describe(`Start the server test`, () => {
    it(`Test that the server is running on port 3000`, async () => {
        const { port } = server.address() as AddressInfo
        expect(port).toBe(3000)
    })
})
