import GenericMethod from "../9-PomExport/generic";
import CSSselector from "../9-PomExport/selector";

let obj = new CSSselector()
describe('saucdemo website', () => {
    it('multiple user', () => {
        GenericMethod.visitURL(obj.selectElement.saucdemoSite)
        GenericMethod.EnterVal(obj.selectElement.userNameSauc, "standard_user")
        GenericMethod.EnterVal(obj.selectElement.passwordSauc, 'secret_sauce')
        GenericMethod.ClickE(obj.selectElement.buttonSauc)
        GenericMethod.Banner(obj.selectElement.bannerSauc)
        GenericMethod.AddtoCart(obj.selectElement.addCart)
        GenericMethod.AddtoCart(obj.selectElement.Basket)
        GenericMethod.Basket(obj.selectElement.price,'29.99')
    })
})