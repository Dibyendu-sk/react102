// import { employeeObj } from "../main"
type EmployeeObj = {
    employee_id: String,
    name: string,
    age: number,
    blood_group: string
}

type EmployeeCardProps = {
    employee: EmployeeObj,
    company: string
}
export function Cards({employee,company="xxxxx"}: EmployeeCardProps) {
    // console.log(props);

    return <>

        <div className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">

            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{employee.name}</h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">Age: {employee.age}</p>
            <p className="font-normal text-gray-700 dark:text-gray-400">Blood Group: {employee.blood_group}</p>
            <p className="font-normal text-gray-700 dark:text-gray-400">{company}</p>
        </div>

    </>
}
