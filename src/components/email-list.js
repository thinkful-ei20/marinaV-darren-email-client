import React from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';
import './email-list.css';

export function EmailList(props) {
    const emails = props.emailList.map((email,index) => {
      return (
        <li key={index} className="email-list-email">
          <div className="email-list-email-from">
            {email.from}
          </div>
          <Link to={`/${props.folderName.toLowerCase()}/${email.id}`}>
            <a className="email-list-email-title">
              {email.title}
            </a>
          </Link>
        </li>
      );
    });

    return (
        <div className="folder">
            <h2>{props.folderName}</h2>
            <ul className="email-list">
                {emails}
            </ul>
        </div>
    );
}

const mapStateToProps = (state, props) => {
//   console.log(props);
  /*   console.log(state[props.match.params.folderId]);*/

  const folder = state[props.match.params.folderId];
    return {
        folderName: folder.name,
        emailList: Object.keys(folder.emails).map(emailId =>
            folder.emails[emailId]
        )
    }
};

export default connect(mapStateToProps)(EmailList);
