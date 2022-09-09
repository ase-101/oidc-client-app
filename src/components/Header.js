import { Link } from 'react-router-dom';

export default function Header({
    heading,
    paragraph,
    linkName,
    linkUrl = "#"
}) {
    return (
        <div className="mb-10">
            <div className="flex justify-center">
                <img
                    alt=""
                    className="h-14 w-14"
                    src="https://st2.depositphotos.com/4362315/7819/v/950/depositphotos_78194060-stock-illustration-medical-logo-health-care-center.jpg" />
            </div>
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                {heading}
            </h2>
            <p className="mt-2 text-center text-sm text-gray-600 mt-5">
                {paragraph} {' '}
                <a href={linkUrl} className="font-medium text-purple-600 hover:text-purple-500">
                    {linkName}
                </a>
            </p>
        </div>
    )
}