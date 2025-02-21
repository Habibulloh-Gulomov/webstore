'use client';

import { useEffect, useState } from 'react';
import axios from 'axios';

const Order = () => {
	const [orders, setOrders] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState('');

	useEffect(() => {
		const fetchOrders = async () => {
			try {
				const token = 'your_token_here'; // Replace with actual token
				const response = await axios.get(
					'https://thewebstorenode.uz.thewebstore.uz/order',
					{
						headers: {
							token:
								'eyJhbGciOiJIUzI1NiJ9.MQ.1tRPowLx-U0FAddHad0zerSPN41lydQhy7A-toLHzBo',
						},
					},
				);
				setOrders(response.data);
			} catch (err) {
				setError('Failed to fetch orders');
			} finally {
				setLoading(false);
			}
		};

		fetchOrders();
	}, []);

	const handleCheck = async (orderId) => {
		alert(`Checking order: ${orderId}`);

		const { data } = await axios.post(
			'https://thewebstorenode.uz.thewebstore.uz/check/' + orderId,
			{},
			{
				headers: {
					token:
						'eyJhbGciOiJIUzI1NiJ9.MQ.1tRPowLx-U0FAddHad0zerSPN41lydQhy7A-toLHzBo',
				},
			},
		);

		setOrders(
			orders.filter((e) =>
				e.paymart_client.contract_id == data.data.contract_id
					? (e.status = data.data.contract_status)
					: true,
			),
		);
	};

	const handleDelete = async (orderId) => {
		const confirmDelete = confirm(
			'Are you sure you want to cancel this order?',
		);
		if (!confirmDelete) return;

		try {
			await axios.post(
				`https://thewebstorenode.uz.thewebstore.uz/orders/${orderId}`,
				{},
				{
					headers: {
						token:
							'eyJhbGciOiJIUzI1NiJ9.MQ.1tRPowLx-U0FAddHad0zerSPN41lydQhy7A-toLHzBo',
					},
				},
			);

			setOrders((prevOrders) =>
				prevOrders.filter((order) => order.order_id !== orderId),
			);

			alert('Order cancelled successfully!');
		} catch (error) {
			alert('Failed to cancel the order. Please try again.');
		}
	};

	if (loading)
		return (
			<div className='text-center py-10 text-gray-600'>Loading orders...</div>
		);
	if (error)
		return <div className='text-center py-10 text-red-500'>{error}</div>;

	return (
		<div className='p-6'>
			<h1 className='text-2xl font-bold mb-4'>Orders</h1>
			<div className='overflow-x-auto'>
				<table className='min-w-full bg-white border border-gray-200 shadow-md rounded-lg'>
					<thead>
						<tr className='bg-gray-100 text-gray-700'>
							<th className='py-3 px-4 text-left'>Order ID</th>
							<th className='py-3 px-4 text-left'>Order shartnomasi</th>
							<th className='py-3 px-4 text-left'>FIO</th>
							<th className='py-3 px-4 text-left'>Date</th>
							<th className='py-3 px-4 text-left'>Client Number</th>
							<th className='py-3 px-4 text-left'>Mahsulot nomi</th>
							<th className='py-3 px-4 text-left'>Oylik to'lov</th>
							<th className='py-3 px-4 text-left'>status kodi</th>
							<th className='py-3 px-4 text-center'>Actions</th>
						</tr>
					</thead>
					<tbody>
						{orders.map((order) => (
							<tr
								key={order.order_id}
								className='border-t border-gray-200 hover:bg-gray-50'>
								<td className='py-3 px-4'>
									{order.paymart_client.contract_id}
								</td>
								<td className='py-3 px-4'>
									{' '}
									<a href={order.client_act_pdf}>Shartnoma</a>
								</td>
								<td className='py-3 px-4'>{order.paymart_client.fio}</td>
								<td className='py-3 px-4'>{order.paymart_client.created_at}</td>
								<td className='py-3 px-4'>+{order.paymart_client.phone}</td>
								<td className='py-3 px-4'>{order.cart[0].name}</td>
								<td className='py-3 px-4'>
									{' '}
									{order.paymart_client.price_month}{' '}
								</td>
								<td className='py-3 px-4'>
									{order.status ? order.status : 'mijoz tasdiqlashi kutilyapti'}
								</td>
								<td className='py-3 px-4 text-center flex'>
									<button
										onClick={() =>
											handleCheck(order.paymart_client.contract_id)
										}
										className='bg-blue-500 text-white px-2 py-1 rounded-lg hover:bg-blue-600 transition mr-2'>
										Check
									</button>
									<button
										onClick={() =>
											handleCheck(order.paymart_client.contract_id)
										}
										className='bg-green-500 text-white px-2 py-1 rounded-lg hover:bg-blue-600 transition mr-2'>
										Accept
									</button>
									<button
										onClick={() => handleDelete(order.paymart_client.order)}
										className='bg-red-500 text-white px-2 py-1 rounded-lg hover:bg-red-600 transition'>
										Delete
									</button>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default Order;
