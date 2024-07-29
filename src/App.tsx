import React from 'react';
import { Navigate, NavLink, Route, Routes } from 'react-router-dom';
import { Error404 } from './components/pages/Error404';
import { Adidas } from './components/pages/Adidas';
import { Puma } from './components/pages/Puma';
import { Abibas } from './components/pages/Abibas';
import styles from './components/Site.module.css';
import { S } from './components/pages/_styles';
import Model from './components/pages/Model';
import adidasModel1 from './assets/AdiFOM_TRXN_Shoes_Black_IG7453_01_standard.webp';
import adidasModel2 from './assets/Superstar_XLG_Shoes_Black_IG9777_01_standard.webp';
import adidasModel3 from './assets/PostMove_Mid_Cloudfoam_Super_Lifestyle_Basketball_Mid_Classic_Shoes_Black_GY7163_01_standard.webp';
import PumaModel from './components/pages/PumaModel';

const PATH = {
	PAGE1: '/adidas',
	PAGE2: '/puma',
	PAGE3: '/abibas',
} as const;

// const arrShoe = [
//     [
//         {
//             id: '1',
//             model: 'ADIDAS ADIFOM TRXN',
//             collection: 'new collection1',
//             price: '100200$',
//             picture: adidasModel1,
//         },
//         {
//             id: '2',
//             model: 'ADIDAS ADIFOM SUPER',
//             collection: 'new collection22',
//             price: '200300$',
//             picture: adidasModel2,
//         },
//         {
//             id: '3',
//             model: 'ADIDAS SUPER SUPERSKI',
//             collection: 'new collection333',
//             price: '300400$',
//             picture: adidasModel3,
//         },
//     ]
// ]

function App() {
	return (
		<div>
			<div className={styles.header}><h1>HEADER</h1></div>
			<div className={styles.body}>
				<div className={styles.nav}>
					<S.NavWrapper><NavLink to={PATH.PAGE1}>Adidas</NavLink></S.NavWrapper>
					<S.NavWrapper><NavLink to={PATH.PAGE2}>Puma</NavLink></S.NavWrapper>
					<S.NavWrapper><NavLink to={PATH.PAGE3}>Abibas</NavLink></S.NavWrapper>
					{/*<a href="page3">page3 HTML</a>*/}
				</div>
				<div className={styles.content}>
					<Routes>
						<Route path={'/'} element={<Navigate to={'/ADIDAS'} />} />

						<Route path={PATH.PAGE1} element={<Adidas />} />
						<Route path={PATH.PAGE2} element={<Puma />} />
						<Route path={PATH.PAGE3} element={<Abibas />} />
						{/*<Route path={'/adidas/model'} element={<Model/>}/>*/}
						<Route path={'/adidas/:id'} element={<Model />} />
						<Route path={'/puma/:id'} element={<PumaModel />} />

						<Route path={'/*'} element={<Error404 />} />
						<Route path={'/*'} element={<Error404 />} />
					</Routes>
				</div>
			</div>
			<div className={styles.footer}>abibas 2023</div>
		</div>
	);
}

export default App;
