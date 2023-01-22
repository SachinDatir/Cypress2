describe('flipcart app functionality', () => {
    it('TC-01 verify the flipcart product', () => {
        cy.visit('https://www.flipkart.com/')
        cy.get('input[type="text"]').type('iphone{enter}')
        cy.get('button[type="submit"]').click()
        cy.get('._1fQZEK').first().invoke('removeAttr', 'target').click({ force: true })
        cy.get('._30VH1S').eq(1).check({ force: true }).should('be.checked')
        cy.get('._1UcWw6>._2KpZ6l').click({ force: true })
        cy.wait(2000)
        cy.get('._396cs4').first().should('be.visible')
        // cy.get('._24KATy>._2npqm0').eq(7).then((el)=>{
        //     let txt = " ₹76,647"
        //     cy.log(el.text().trim())
        // })
    })

    it.only("TC -02 ", () => {
        cy.request({
            url: "https://2.rome.api.flipkart.com/api/4/discover/autosuggest",
            method: "POST",
            headers: {
                "Accept": "*/*",
                " Accept-Encoding": " gzip, deflate, br",
                " Accept-Language": "en-US,en;q=0.9",
                "Connection": "keep-alive",
                "Content-Type": "application/json",
                "Host": "2.rome.api.flipkart.com",
                "Origin": "https://www.flipkart.com",
                "Referer": "https://www.flipkart.com/",
                "sec-ch-ua": "empty",
                " Sec-Fetch-Mode": "cors",
                "Sec-Fetch-Site": "same - site",
                "User-Agent": "Mozilla / 5.0(Windows NT 10.0; Win64; x64) AppleWebKit / 537.36(KHTML, like Gecko) Chrome / 109.0.0.0 Safari / 537.36",
                "X-User-Agent": " Mozilla / 5.0(Windows NT 10.0; Win64; x64) AppleWebKit / 537.36(KHTML, like Gecko) Chrome / 109.0.0.0 Safari / 537.36 FKUA / website / 42 / website / Desktop",
                "sec-ch-ua": '"Not_A Brand"; v = "99", "Google Chrome"; v = "109", "Chromium"; v = "109"',
                "sec-ch-ua-mobile": "?0",
                " sec-ch-ua-platform": "Windows"
            },


            body:
            {
                "query": "i",
                "contextUri": "/",
                "marketPlaceId": "FLIPKART",
                "types": [
                    "QUERY",
                    "QUERY_STORE",
                    "PRODUCT",
                    "RICH",
                    "PARTITION"
                ],
                "rows": 10,
                "zeroPrefixHistory": false,
                "userTimeStamp": 1674369454771,
                "searchBrowseHistory": [
                    {
                        "uri": "/search?q=iphone+13&otracker=search&otracker1=search&marketplace=FLIPKART&as-show=on&as=off&as-pos=1&as-type=HISTORY",
                        "marketPlaceId": "FLIPKART",
                        "timestamp": 1674369447812
                    },
                    {
                        "uri": "/search?q=iphone&otracker=AS_Query_HistoryAutoSuggest_2_0&otracker1=AS_Query_HistoryAutoSuggest_2_0&marketplace=FLIPKART&as-show=off&as=off&as-pos=2&as-type=HISTORY",
                        "marketPlaceId": "FLIPKART",
                        "timestamp": 1674369447812
                    }
                ]
            }

        }).then((res) => {
            cy.log(res)

        })

    })
})