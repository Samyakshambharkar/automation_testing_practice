describe('template spec', () => {
  it('Open the website and fill the form', () => {
    cy.visit('https://testautomationpractice.blogspot.com/')

    // Type the text in the feilds 
    cy.get('#name').type('Pranay')
    cy.get('#email').type('pranay@gmail.com')
    cy.get('#phone').type('8956245362')
    cy.get('#textarea').type('Plot no: 139 - Behind bakde sabhagruha, Manewada, Nagpur.')

    // Select male or female
    cy.get('#male').click()

    // click check box Monday tuesday and sunday.
    cy.get('#monday').check()
    cy.get('#tuesday').check()
    cy.get('#sunday').check()

    // Now select the country, colour and animals name from Dropdown
    cy.get('#country').select('Canada')
    cy.get('#colors').select('Yellow')
    cy.get('#animals').select('Deer')

    // Now type the Date.
    cy.get('#datepicker').type('03/02/2020')

    // select the Date form date picker.
    cy.get('#txtDate').click({ force: true })
    cy.get('.ui-datepicker-month').select('Apr')
    cy.get('.ui-datepicker-year').select('2020') 
    cy.get('.ui-datepicker-calendar').contains('20').click()

    // Select from to date (Type values in its format)
    cy.get('#start-date').type('2024-12-11')
    cy.get('#end-date').type('2026-12-11')
    cy.get('.submit-btn').click()

    //Upload single file
    cy.get('#singleFileInput').selectFile("C:\\Users\\leado\\OneDrive\\Desktop\\grid-insight-tests\\consumerid_70-directormahavitaran.pdf", { force: true });
    cy.get('#singleFileForm > button').click()

    // Uplaod Multiple files
    cy.get('#multipleFilesInput').selectFile("C:\\Users\\leado\\OneDrive\\Desktop\\grid-insight-tests\\consumerid_70-directormahavitaran.pdf", { force: true })
    cy.get('#multipleFilesForm > button').click()

    // Pagination Web Table -> switch page and multiselect the values
    cy.get('#pagination > :nth-child(4) > a').click()
    cy.get(':nth-child(5) > :nth-child(4) > input').click()

    // Write a Paragraph
    cy.get('#input1').type('Hi my name is pranay, im software tester')
    cy.get('#btn1').click()
    cy.get('#input2').type('Hi my name is pranu, im software tester')
    cy.get('#btn2').click()
    cy.get('#input3').type('Hi my name is panya, im software tester')
    cy.get('#btn3').click()

    // Dynamic Button
    cy.get('.start').click().should('have.text', 'STOP')
    cy.get('.stop').click().should('have.text', 'START')

    // Prompt alert popup box 
    cy.get('#promptBtn').click()
    cy.window().then((win) => {
      cy.stub(win, 'prompt').returns('panyaaaaaaa');
    });
    cy.get('#promptBtn').click()
    cy.get('#demo').should('contain', 'panyaaaaaaa')

    // Hover on button 
    cy.get('.dropbtn').trigger('mouseover')

    // Double Click
    cy.get('#HTML10 > .widget-content > button').dblclick({ force: true })

    // Drag and drop, First need to import this function by --> npm install --save-dev @4tw/cypress-drag-drop
    cy.get('#draggable').drag('#droppable', { force: true })
    cy.get('#droppable > p').contains('Dropped!')

    // Price Slider  
    // cy.get('#slider-range').then(($slider) => {        // Pehle slider ki width nikalenge
    //   cy.log('this is the value of slider:', $slider)
    //   const width = $slider.width();                   // jaise maan le 500px width hai

    //   // const targetX = width * 1.0;                    // 100% of slider ka matlab ₹500
    //   cy.get('[style="left: 60%;"]')                   // ye right wala slider hai
    //     .trigger('mousedown', { which: 1 });           // mouse dabaya

    //   // Ab mouse ko slider bar ke andar 100% jagah le jaake chhod diya
    //   cy.get('#slider-range')
    //     .trigger('mousemove', { clientX: targetX }) // cursor ko 100% tak ghaseeta
    //     .trigger('mouseup'); // mouse chhoda
    // });

    // Dropdown with scrolling
    cy.get('#comboBox').click()
    cy.get('#dropdown').contains('Item 100').click()

    // Visiting Links 
    cy.contains('Apple').should('have.attr', 'href').and('include', 'apple.com');
    cy.get('#dell').should('have.attr', 'href').and('include', 'dell.com')
    cy.get('#lenovo').should('have.attr', 'href').and('include', 'lenovo.com')

    // Shadow DOM
    // cy.get('#shadow_host').shadow().find('input [type="text"]').type('hi')
    cy.get('#shadow_host').shadow().find('input[type="text"]').type('Hello!');
    cy.get('#shadow_host').shadow().contains('Blog').should('have.attr','href').and('include', 'https://www.pavantestingtools.com/')
    cy.get('#shadow_host').shadow().find('input[type="checkbox"]').check()
    cy.get('#shadow_host').shadow().find('input[type="file"]').click().selectFile("C:\\Users\\leado\\OneDrive\\Desktop\\grid-insight-tests\\consumerid_70-directormahavitaran.pdf", { force: true })

    // Click on AJAX and navigate on next page.
    cy.get('#PageList1 > .widget-content > ul > :nth-child(2) > a').click()
    cy.get('#container > #input1').type('Pranay kharabe')
    cy.get('#toggleInput').click()
    cy.get('#container > #input2').type('Prau Kharu')
    cy.get('#checkbox1').check()
    cy.get('#toggleCheckbox').click()
    cy.get('#checkbox2').check()
    cy.get('#loadContent').click()
    cy.wait(5000)
    cy.get('#ajaxContent > h2').should('have.text', 'AJAX Content Loaded')
    cy.get('#ajaxContent > p').should('have.text', 'This is some dynamic content loaded through AJAX.')

    // Now Vist Download Files 3rd page.
    cy.get('#PageList1 > .widget-content > ul > :nth-child(3) > a').click()
    cy.get('#inputText').click().type('Sammu')
    cy.get('#generateTxt').click()
    cy.get('#txtDownloadLink').click()
    cy.get('#generatePdf').click()
    cy.get('#pdfDownloadLink').click()

  });
})