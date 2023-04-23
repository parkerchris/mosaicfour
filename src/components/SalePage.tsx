import styles from "../styles/SalePage.module.css"
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import { useState } from "react";

const SalePage = () => {

    const initialState = {
        desc1: false,
        desc2: false,
        desc3: false,
        desc4: false,
        desc5: false
    }

    const [ showDescription, setShowDescription ] = useState(initialState)

    return (
        <div>
            <div className={styles.header}>
                <h1>BLOOM</h1>
                <h3>LOG IN</h3>
            </div>
            <div className={styles.main}>
                <h1>Banking, funding, and growth tools for real estate portfolios</h1>
                <h3>Automated banking and business tools, plus community, so you can focus on what you do best -- investing.</h3>
                <button className={styles.button}>Get Started</button>
                <p>Bloom is a financial technology company, not a bank. Banking services are provided by Blue Ridge Bank, N.A.; Member FDIC.</p>
            </div>



            <div className={styles.infoContainer}>
                <div className={styles.innerContainer}>
                    <div className={styles.innerLeft}>
                        <h3>Bank accounts designed for scaling real estate portfolios</h3>
                        <p className={styles.mainDescription}>Set up personal or business bank accounts in less than 2 minutes</p>
                        <div 
                            className={styles.descriptionContainer}
                            onClick={() => setShowDescription(state => ({ ...initialState, desc1: !state.desc1 }))}
                                >
                            <div className={styles.descriptionHeader}>
                                <h4>Debit and Credit Cards</h4>
                                {showDescription.desc1 ? <IoIosArrowDown /> : <IoIosArrowForward />}
                            </div>
                            {showDescription.desc1 && <p className={styles.paragraph}>Create business or personal accounts in less than 2 minutes. See all income and expenses in one unified location.</p>}
                        </div>
                        <div 
                            className={styles.descriptionContainer}
                            onClick={() => setShowDescription(state => ({ ...initialState, desc2: !state.desc2 }))}
                                >
                            <div className={styles.descriptionHeader}>
                                <h4>Multiple Accounts</h4>
                                {showDescription.desc2 ? <IoIosArrowDown /> : <IoIosArrowForward />}
                            </div>
                            {showDescription.desc2 && <p className={styles.paragraph}>Multiple properties and multiple partners? No problem. Create seperate accounts for each property or partner group, and keep everything together but seperate.</p>}
                        </div>
                        <div 
                            className={styles.descriptionContainer}
                            onClick={() => setShowDescription(state => ({ ...initialState, desc3: !state.desc3 }))}
                                >
                            <div className={styles.descriptionHeader}>
                                <h4>Invoicing</h4>
                                {showDescription.desc3 ? <IoIosArrowDown /> : <IoIosArrowForward />}
                            </div>
                            {showDescription.desc3 && <p className={styles.paragraph}>Create and customize multiple accounts to stay organized.</p>}
                        </div>
                        <div 
                            className={styles.descriptionContainer}
                            onClick={() => setShowDescription(state => ({ ...initialState, desc4: !state.desc4 }))}
                                >
                            <div className={styles.descriptionHeader}>
                                <h4>Performance and Cash Flow Analytics</h4>
                                {showDescription.desc4 ? <IoIosArrowDown /> : <IoIosArrowForward />}
                            </div>
                            {showDescription.desc4 && <p className={styles.paragraph}>Create and customize multiple accounts to stay organized.</p>}
                        </div>
                        <div 
                            className={styles.descriptionContainer}
                            onClick={() => setShowDescription(state => ({ ...initialState, desc5: !state.desc5 }))}
                                >
                            <div className={styles.descriptionHeader}>
                                <h4>Link Existing Accounts</h4>
                                {showDescription.desc5 ? <IoIosArrowDown /> : <IoIosArrowForward />}
                            </div>
                            {showDescription.desc5 && <p className={styles.paragraph}>Link existing personal accounts and mortgage acccounts to see the full picture of inflows and outflows and better track property performance.</p>}
                        </div>
                    </div>
                    <div className={styles.innerRight}>
                        <div className={styles.fakeImage}>PLACE YOUR IMAGE HERE</div>
                    </div>
                </div>
            </div>



            <div className={styles.infoContainer}>
                <div className={styles.innerContainer}>
                    <div className={styles.innerLeft}>
                        <h3>Customized tax tools for investors</h3>
                        <p className={styles.mainDescription}>Set up personal or business bank accounts in less than 2 minutes</p>
                        <div 
                            className={styles.descriptionContainer}
                            onClick={() => setShowDescription(state => ({ ...initialState, desc1: !state.desc1 }))}
                                >
                            <div className={styles.descriptionHeader}>
                                <h4>Expense Categorizer</h4>
                                {showDescription.desc1 ? <IoIosArrowDown /> : <IoIosArrowForward />}
                            </div>
                            {showDescription.desc1 && <p className={styles.paragraph}>Categorize your personal, business and mixed expenses to make tax time a breeze.</p>}
                        </div>
                        <div 
                            className={styles.descriptionContainer}
                            onClick={() => setShowDescription(state => ({ ...initialState, desc2: !state.desc2 }))}
                                >
                            <div className={styles.descriptionHeader}>
                                <h4>Contractor Pay</h4>
                                {showDescription.desc2 ? <IoIosArrowDown /> : <IoIosArrowForward />}
                            </div>
                            {showDescription.desc2 && <p className={styles.paragraph}>Pay your contractors early and often with Bloom's 1099 IRS compliant tool.</p>}
                        </div>
                        <div 
                            className={styles.descriptionContainer}
                            onClick={() => setShowDescription(state => ({ ...initialState, desc3: !state.desc3 }))}
                                >
                            <div className={styles.descriptionHeader}>
                                <h4>CPA Concierge</h4>
                                {showDescription.desc3 ? <IoIosArrowDown /> : <IoIosArrowForward />}
                            </div>
                            {showDescription.desc3 && <p className={styles.paragraph}>Maximize your earnings and minimize your taxes with a real estate minded CPA.</p>}
                        </div>
                        <div 
                            className={styles.descriptionContainer}
                            onClick={() => setShowDescription(state => ({ ...initialState, desc4: !state.desc4 }))}
                                >
                            <div className={styles.descriptionHeader}>
                                <h4>Performance and Cash Flow Analytics</h4>
                                {showDescription.desc4 ? <IoIosArrowDown /> : <IoIosArrowForward />}
                            </div>
                            {showDescription.desc4 && <p className={styles.paragraph}>Create and customize multiple accounts to stay organized.</p>}
                        </div>
                        <div 
                            className={styles.descriptionContainer}
                            onClick={() => setShowDescription(state => ({ ...initialState, desc5: !state.desc5 }))}
                                >
                            <div className={styles.descriptionHeader}>
                                <h4>Link Existing Accounts</h4>
                                {showDescription.desc5 ? <IoIosArrowDown /> : <IoIosArrowForward />}
                            </div>
                            {showDescription.desc5 && <p className={styles.paragraph}>Link existing personal accounts and mortgage acccounts to see the full picture of inflows and outflows and better track property performance.</p>}
                        </div>
                    </div>
                    <div className={styles.innerRight}>
                        <div className={styles.fakeImage}>PLACE YOUR IMAGE HERE</div>
                    </div>
                </div>
            </div>


            <div className={styles.infoContainer}>
                <div className={styles.innerContainer}>
                    <div className={styles.innerLeft}>
                        <h3>Bloom Black® We fund investor futures to supercharge growth</h3>
                        <p className={styles.mainDescription}>Personalized funding, community and white glove service on your terms.</p>
                        <div 
                            className={styles.descriptionContainer}
                            onClick={() => setShowDescription(state => ({ ...initialState, desc1: !state.desc1 }))}
                                >
                            <div className={styles.descriptionHeader}>
                                <h4>Bloom Black Funds</h4>
                                {showDescription.desc1 ? <IoIosArrowDown /> : <IoIosArrowForward />}
                            </div>
                            {showDescription.desc1 && <p className={styles.paragraph}>Monthly funding options in exchange for your existing YouTube content revenue — you keep future content revenue.  Annual funding options in exchange for a percentage of your existing and new platform content revenue.</p>}
                        </div>
                        <div 
                            className={styles.descriptionContainer}
                            onClick={() => setShowDescription(state => ({ ...initialState, desc2: !state.desc2 }))}
                                >
                            <div className={styles.descriptionHeader}>
                                <h4>Community and Education</h4>
                                {showDescription.desc2 ? <IoIosArrowDown /> : <IoIosArrowForward />}
                            </div>
                            {showDescription.desc2 && <p className={styles.paragraph}>Monthly education sessions exclusively for Bloom Black investors with fellow investors and industry leaders to further grow your business</p>}
                        </div>
                        <div 
                            className={styles.descriptionContainer}
                            onClick={() => setShowDescription(state => ({ ...initialState, desc3: !state.desc3 }))}
                                >
                            <div className={styles.descriptionHeader}>
                                <h4>CPA Concierge</h4>
                                {showDescription.desc3 ? <IoIosArrowDown /> : <IoIosArrowForward />}
                            </div>
                            {showDescription.desc3 && <p className={styles.paragraph}>Maximize your earnings and minimize your taxes with a real estate minded CPA.</p>}
                        </div>
                        <div 
                            className={styles.descriptionContainer}
                            onClick={() => setShowDescription(state => ({ ...initialState, desc4: !state.desc4 }))}
                                >
                            <div className={styles.descriptionHeader}>
                                <h4>Performance and Cash Flow Analytics</h4>
                                {showDescription.desc4 ? <IoIosArrowDown /> : <IoIosArrowForward />}
                            </div>
                            {showDescription.desc4 && <p className={styles.paragraph}>Create and customize multiple accounts to stay organized.</p>}
                        </div>
                        <div 
                            className={styles.descriptionContainer}
                            onClick={() => setShowDescription(state => ({ ...initialState, desc5: !state.desc5 }))}
                                >
                            <div className={styles.descriptionHeader}>
                                <h4>Link Existing Accounts</h4>
                                {showDescription.desc5 ? <IoIosArrowDown /> : <IoIosArrowForward />}
                            </div>
                            {showDescription.desc5 && <p className={styles.paragraph}>Link existing personal accounts and mortgage acccounts to see the full picture of inflows and outflows and better track property performance.</p>}
                        </div>
                    </div>
                    <div className={styles.innerRight}>
                        <div className={styles.fakeImage}>PLACE YOUR IMAGE HERE</div>
                    </div>
                </div>
            </div>


            <div className={styles.infoContainer}>
                <div className={styles.innerContainer}>
                    <div className={styles.innerLeft}>
                        <h3>One-stop-shop investor business accounts</h3>
                        <p>Setup personal or business bank accounts in less than 2 minutes</p>
                        <div className={styles.descriptionContainer}>
                            <div className={styles.descriptionHeader}>
                                <h3>Debit and Credit Cards</h3>
                                <IoIosArrowForward />
                            </div>
                            <p>Separate your personal and business expenses with a Juice account. Use your debit card with confidence at 55,000 AllPoint® ATM locations or add to your virtual wallet.</p>
                        </div>
                        <div className={styles.descriptionContainer}>
                            <div className={styles.descriptionHeader}>
                                <h3>Multiple Accounts</h3>
                                <IoIosArrowForward />
                            </div>
                            <p>Create and customize multiple accounts to stay organized.</p>
                        </div>
                        <div className={styles.descriptionContainer}>
                            <div className={styles.descriptionHeader}>
                                <h3>Multiple Accounts</h3>
                                <IoIosArrowForward />
                            </div>
                            <p>Create and customize multiple accounts to stay organized.</p>
                        </div>
                        <div className={styles.descriptionContainer}>
                            <div className={styles.descriptionHeader}>
                                <h3>Multiple Accounts</h3>
                                <IoIosArrowForward />
                            </div>
                            <p>Create and customize multiple accounts to stay organized.</p>
                        </div>
                    </div>
                    <div className={styles.innerRight}>
                        <div className={styles.fakeImage}>PLACE YOUR IMAGE HERE</div>
                    </div>
                </div>
            </div>





        </div>
    )
}

export default SalePage