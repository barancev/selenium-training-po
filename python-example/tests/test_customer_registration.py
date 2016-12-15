import pytest
from .data_providers import valid_customers


@pytest.mark.parametrize("customer", valid_customers, ids=[repr(x) for x in valid_customers])
def test_can_register_customer(app, customer):
    old_ids = app.get_customer_ids()

    app.register_new_customer(customer)

    new_ids = app.get_customer_ids()

    assert all([i in new_ids for i in old_ids])
    assert len(new_ids) == len(old_ids) + 1
