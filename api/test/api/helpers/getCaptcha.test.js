const getCaptcha = require('../../../api/helpers/getCaptcha')
var should = require('should');


describe('test getCaptcha', () => {
    it('getCaptcha', () => {
        should.exist(getCaptcha())
    })
})