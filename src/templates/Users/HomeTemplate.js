import { Fragment } from "react"
import { Route } from "react-router-dom"
import Footer from "../../Layout/Footer/Footer"
import Header from "../../Layout/HeaderHome/Home"

export const HomeTemplate = (props) => {
    return <Route exact path={props.path} render={(propsRouter) => {
        return (
          <Fragment>
            <Header/>
            <div style={{ paddingBottom: '20px' }}>
              <props.component {...propsRouter} />
            </div>
            <Footer/>
          </Fragment>
        )
    }} />
}