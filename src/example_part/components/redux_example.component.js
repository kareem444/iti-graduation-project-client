import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from '../../redux/counter/counter.reducer';
import fetchUserById from '../../redux/counter/counter.actions';

const ReduxExampleComponent = () => {
    const count = useSelector((state) => state.counter.value)
    const users = useSelector((state) => state.counter.users)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchUserById("dwd"))
    }, [dispatch])
    return (
        <div>
            <div>
                <button
                    aria-label="Increment value"
                    onClick={() => dispatch(increment())}
                >
                    Increment
                </button>
                <span>{count}</span>
                <button
                    aria-label="Decrement value"
                    onClick={() => dispatch(decrement())}
                >
                    Decrement
                </button>
            </div>

            {users.map(v =>
                <div key={v["_id"]}>{v.name}</div>
            )}
        </div>
    );
}

export default ReduxExampleComponent;
