export const DashboardCategoryOverview = () => {
  return (
    <>
      <section className='card flex flex-col gap-6 bg-neutral text-neutral-content p-4'>
        <div className='flex flex-col gap-2'>
          <h2 className='text-xl font-bold'>Category Overview</h2>
          <p className='text-sm'>
            List of categories with the number of tasks in each.
          </p>
        </div>

        <div className=' overflow-x-auto'>
          <table className='table'>
            {/* head */}
            <thead>
              <tr className='text-neutral-content '>
                <th>Categories</th>
                <th>Number of Categories</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Personal</td>
                <td>10</td>
              </tr>
              <tr className='bg-primary'>
                <td>Work</td>
                <td>35</td>
              </tr>
              <tr>
                <td>Others</td>
                <td>15</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </>
  )
}
