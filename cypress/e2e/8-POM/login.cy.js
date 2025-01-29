import GenericMethod from '../PomExport/generic'
import CSSselector from '../PomExport/selector'

let sel = new CSSselector()
describe('PageObjectModel', () => {
    it('TC01 search element', () => {
        GenericMethod.visitURL(sel.selectElement.automationSite)
        GenericMethod.EnterVal(sel.selectElement.userName, 'Admin')
        GenericMethod.EnterVal(sel.selectElement.password, 'admin123')
        GenericMethod.ClickE(sel.selectElement.button)
        GenericMethod.Banner(sel.selectElement.Banner)
        GenericMethod.EmployeeInfo(sel.selectElement.EmployeeName, 'Sachin')
        GenericMethod.EmployeeID(sel.selectElement.EmployeeID, 5)
        GenericMethod.EmployeeStatus(sel.selectElement.Employeestatus)
    })
})