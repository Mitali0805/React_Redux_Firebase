import ProjectList from "../projects/ProjectList";
import Notifications from "./Notifications";
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    return {
        projects: state.project.projects
    }
}

const Dashboard = (props) => {
    const { projects } = props
    return (
        <div className="container">
            <div className="row">
                <div className="col s12 m6">
                    <ProjectList projects={projects} />
                </div>
                <div className="col s12 m5 offset-m1">
                    <Notifications />
                </div>
            </div>
        </div>
    )
}

export default connect(mapStateToProps)(Dashboard);