import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { logOut } from 'actions/users';

import classNames from 'classnames/bind';
import styles from 'css/components/navigation';

const cx = classNames.bind(styles);

const Navigation = ({user, dispatch}) => {
	const logout = () => dispatch(logOut());

    return (
      <nav className={cx('navigation')} role="navigation">
        <Link to="/"
          className={cx('item', 'logo')}
          activeClassName={cx('active')}>Billa's Blog</Link>
				<Link className={cx('item')} to="/">Home</Link>
				<Link className={cx('item')} to="#">Categorys</Link>
				<Link className={cx('item')} to="/dashboard">Dashboard</Link>
				<Link to="/about" className={cx('item')} activeClassName={cx('active')}>About</Link>
          { user.authenticated ? (
						<span>
							<Link className={cx('item')} to="/createArticle">Compose</Link>
            	<Link onClick={logout}
								className={cx('item')} to="/">Logout</Link>
						</span>
				) : (
            <Link className={cx('item')} to="/login">Log in</Link>
          )}
      </nav>
    );
};

Navigation.propTypes = {
  user: PropTypes.object,
  dispatch: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  return {
    user: state.user
  };
}

export default connect(mapStateToProps)(Navigation);
