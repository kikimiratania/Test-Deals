
describe('Mentoring', () => {
    beforeEach(() => {
        // Kunjungi halaman Data Perusahaan
        cy.visit('https://job-portal-user-dev-skx7zw44dq-et.a.run.app/mentoring');
        cy.wait(3000); // Tunggu 3 detik sebelum mencari elemen

    //    cy.Register();
    })
    it('search data not found', () => {
        cy.get('.fixed > [href="/mentoring"]').click();
        // cy.scrollTo('Cari berdasarkan nama');
        cy.get('#searchMentor').type ('adasd');
        cy.get('.mt-\[57px\]').should('be.visible'); //verify data not found

    })

    it('search data  found', () => {
        cy.get('.fixed > [href="/mentoring"]').click();
        // cy.scrollTo('Cari berdasarkan nama');
        cy.get('#searchMentor').type ('adasd');
        //cy.get('.mt-\[57px\]').should('be.visible'); //verify data not found
        cy.get('#searchMentor').clear();
    })

    it('search By name', () => {
        cy.get('.fixed > [href="/mentoring"]').click();
        // cy.scrollTo('Cari berdasarkan nama');
        cy.get('#searchMentor').type ('Cika');
        //cy.get('.mt-\[57px\]').should('be.visible'); //verify data not found
        cy.get('#searchMentor').clear();
    })

    it('search By Company', () => {
        cy.get('.fixed > [href="/mentoring"]').click();
        // cy.scrollTo('Cari berdasarkan nama');
        cy.get('#searchMentor').type ('Microsoft');
        cy.get('#searchMentor').clear();
    })

    it('search By role', () => {
        cy.get('.fixed > [href="/mentoring"]').click();
        // cy.scrollTo('Cari berdasarkan nama');
        cy.get('#searchMentor').type ('Software Architect');
       
        cy.get('#searchMentor').clear();
    })

    it('search By Company', () => {
        cy.get('.fixed > [href="/mentoring"]').click();
        // cy.scrollTo('Cari berdasarkan nama');
        cy.get('#searchMentor').type ('Microsoft');
        
        cy.get('#searchMentor').clear();
        //cy.get('.my-9 > .gap-2 > .flex')
    })

    
    // it('filter ', () => {
    // cy.get('.my-9 > .gap-2 > .flex').click();
    // cy.wait(2000);
    // cy.get('.MentorMobileSortParam_sort_param_dropdown__6qX5M > .ant-select > .ant-select-selector > .ant-select-selection-item').click(); // Type role name into the input
    // cy.get('.ant-select-item-option').contains('Paling relevan').click(); //Wait for dropdown to appear and click the desired option
    
    // })
    it(' Eksplor Career  Accounting', () => {
        cy.get('.swiper-slide-next').click();
    })


    it(' Eksplor by Career  Art & design', () => {
        cy.get('.swiper-wrapper > :nth-child(3)').click();
    })

    
    it(' Eksplor by Career  Business', () => {
        cy.get('.swiper-wrapper > :nth-child(4)').click();
    })

    it(' Eksplor by Career  Data', () => {
        cy.get('.swiper-wrapper > :nth-child(5)').click();
    })

 
    it('view mentoring and submit Schedule ', () => {
        cy.get('.mt-4 > .flex-row').click();
        //Select the topic you want to discuss with your mentor.
        cy.get('.grid > :nth-child(1) > .relative').click();
        cy.get('.grid > :nth-child(2) > .relative > .font-semibold').click();
        cy.get('.col-start-1 > .relative > .font-semibold').click();
        cy.get('#mentoring-schedule-topic-request-session-btn').click();

        //step 2:
        cy.get('.rmdp-container > :nth-child(1) > .h-9').click();

        })
})