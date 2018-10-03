import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AdminLayout from '../../../Hoc/AdminLayout';

import { firebaseItems } from '../../../firebase';
import { firebaseLooper, reverseArray } from '../../Utils/Misc';

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
    items: [],
  };

  componentDidMount() {
    firebaseItems.once('value').then(snapshot => {
      const items = firebaseLooper(snapshot);

      this.setState({
        isloading: false,
        items: reverseArray(items),
      });
    });
  }

  render() {
    return (
      <AdminLayout>
        <div>
          <Paper>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Brand</TableCell>
                  <TableCell>Item Name</TableCell>
                  <TableCell>Price</TableCell>
                  <TableCell>Description</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {this.state.items
                  ? this.state.items.map((item, i) => (
                      <TableRow key={i}>
                        <TableCell>
                          <Link to={`/admin_items/edit_item/${item.id}`}>
                            {item.name}
                          </Link>
                        </TableCell>
                        <TableCell>
                          <Link to={`/admin_items/edit_item/${item.id}`}>
                            {item.lastname}
                          </Link>
                        </TableCell>
                        <TableCell>{item.number}</TableCell>
                        <TableCell>{item.position}</TableCell>
                      </TableRow>
                    ))
                  : null}
              </TableBody>
            </Table>
          </Paper>

          <div className="admin_progress">
            {this.state.isloading ? (
              <CircularProgress thickness={6} style={{ color: '#98c5e9' }} />
            ) : (
              ''
            )}
          </div>
        </div>
      </AdminLayout>
    );
  }
}

export default AdminItems;
