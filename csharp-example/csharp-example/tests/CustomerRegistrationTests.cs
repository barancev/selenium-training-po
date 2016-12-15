using System;
using System.Collections.Generic;
using NUnit.Framework;

namespace csharp_example
{
    [TestFixture]
    public class CustomerRegistrationTests : TestBase
    {
        [Test, TestCaseSource(typeof(DataProviders), "ValidCustomers")]
        public void CanRegisterCustomer(Customer customer)
        {
            ISet<String> oldIds = app.GetCustomerIds();

            app.RegisterNewCustomer(customer);

            ISet<String> newIds = app.GetCustomerIds();

            Assert.IsTrue(newIds.IsSupersetOf(oldIds));
            Assert.IsTrue(newIds.Count == oldIds.Count + 1);
        }
    }
}
