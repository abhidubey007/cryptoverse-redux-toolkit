import { configureStore } from '@reduxjs/toolkit';

import { cryptoApi } from '../services/cryptoApi';
<<<<<<< HEAD
import { cryptoNewsApi } from '../services/cryptoNewsApi';
=======
>>>>>>> 58e9962859d999d152a5b0273faae9fb9d0a0681

export default configureStore({
    reducer: {
        [cryptoApi.reducerPath]: cryptoApi.reducer,
<<<<<<< HEAD
        [cryptoNewsApi.reducerPath]: cryptoNewsApi.reducer,
=======
>>>>>>> 58e9962859d999d152a5b0273faae9fb9d0a0681
    }
})