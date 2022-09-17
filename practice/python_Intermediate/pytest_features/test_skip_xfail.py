import pytest


@pytest.mark.skip
def test_sum1():
    assert 1 + 2 == 3


def test_sum2():
    assert 1 + 2 == 4
