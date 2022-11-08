///<reference types="cypress" />
// in paypal 2 time authentication
//let token = 'Basic QVF4LWYwYzczNVo4ZlY0aEFPWlo2cEpCMXB5RmJGbzlTMEtMa2lsRkswdzVsYnFhYlp0TFFsZm81MzBNV1dhR091eW1Oa2JoV1J0MWpJT0c6RUk2SWlhc1N0TjlUQ1BfZVN5MmRwSGF0aVZ1SHU0S3hOamRRSF9WZUs5QUQ2bFFvc3FuMzVlS1NfQnFIVk5nVHp3cWZhVk5jb1BqT1hLVTM='
describe('verify the paypal API', () => {
    it('verify BAsicAuth', () => {
        cy.request({
            method: 'POST',
            url: 'https://api-m.sandbox.paypal.com/v1/oauth2/token',
            headers: {
                Authorization: 'Basic QVF4LWYwYzczNVo4ZlY0aEFPWlo2cEpCMXB5RmJGbzlTMEtMa2lsRkswdzVsYnFhYlp0TFFsZm81MzBNV1dhR091eW1Oa2JoV1J0MWpJT0c6RUk2SWlhc1N0TjlUQ1BfZVN5MmRwSGF0aVZ1SHU0S3hOamRRSF9WZUs5QUQ2bFFvc3FuMzVlS1NfQnFIVk5nVHp3cWZhVk5jb1BqT1hLVTM='
            },
            body: {
                grant_type: 'client_credentials'
            },
            form: true
        }).then((res) => {
            cy.log(res.body)
            expect(res.body.app_id).to.eq('APP-80W284485P519543T')
            expect(res.body.token_type).to.eql('Bearer')
           
        })
    })
    it.only('verify the Get request',()=>{
        cy.request({
            method:'GET',
            url:'https://api-m.sandbox.paypal.com/v1/identity/oauth2/userinfo?schema=paypalv1.1',
            headers:{
                'Content-Type':'application/json',
                Authorization:'Bearer A21AAL4_pmggq5B1NligCEYvBlmnSuboOjIXKgcmSgKBkIoV_qfYeSCeexsE-HwdmhJbmNPzaLC2QOrZ4BIGdZuWcEHCp_i1A'
            }
        }).then((res)=>{
            cy.log(res)
        })
    })
})