import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AdminLayout from '../../../Hoc/AdminLayout';

import { firebaseProducts } from '../../../firebase';
import { firebaseLooper, reveseArray } from '../../Utils/Misc';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import CircularProgress from '@material-ui/core/CircularProgress';

class AdminItems extends Component {
  state = {
    isloading: true,
    products: [],
  };

  render() {
    return (
      <AdminLayout>
        <div className="admin_progress">
          {this.state.isloading ? (
            <CircularProgress thickness={7} style={{ color: '#98c5e9' }} />
          ) : (
            ''
          )}
        </div>
      </AdminLayout>
    );
  }
}

export default AdminItems;
