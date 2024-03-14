import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const PaymentGraph = ({ families }) => {
    const chartRef = useRef(null);
    const chartInstance = useRef(null);

    useEffect(() => {
        if (chartInstance.current) {
            chartInstance.current.destroy();
        }

        if (chartRef && chartRef.current) {
            const ctx = chartRef.current.getContext('2d');
            const paid = families.filter(family => family.payments.some(payment => payment.paid)).length;
            const notPaid = families.length - paid;

            chartInstance.current = new Chart(ctx, {
                type: 'pie',
                data: {
                    labels: ['Paid', 'Not Paid'],
                    datasets: [{
                        data: [paid, notPaid],
                        backgroundColor: ['#36a2eb', '#ff6384'],
                    }]
                },
                options: {
                    plugins: {
                        title: {
                            display: true,
                            text: 'Payment Status',
                            font: {
                                size: 18
                            }
                        }
                    }
                }
            });
        }
    }, [families]);

    return <canvas ref={chartRef} />;
};

export default PaymentGraph;
