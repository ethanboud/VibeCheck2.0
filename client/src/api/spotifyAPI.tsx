// client id
// a1c9b9ae9d544e4eb9590e3c8e0ca57c
// client secret
// 9db967eaab0a4b808d418a8bc019dbd1
// const spotifyAPIcontrols = (function() {

// const clientID = '';
// const clientSecret = '';

//      const spotifyToken = async () => {
//        try {
//          const response = await fetch('https://accounts.spotify.com/api/token', {
//             method: 'POST',
//            headers: {
//              'Content-Type': 'application/x-www-form-urlencoded',
//              'Authorization': 'Basic' + btoa(clientID + ':' + clientSecret)
//            },
//            body: 'grant_type=client_credentials'
//          });
//          const data = await response.json();
     
//          if (!response.ok) {
//            throw new Error('invalid spotify API response, check network tab!');
//          }
     
//          return data.access_token;
         
//        } catch (err) {
//          console.log('Error from data retrieval:', err);
//          return [];
//        }
//      };

//      const getTrack = async (token) => {
//         try {
//             const response = await fetch('https://accounts.spotify.com/api/token', {
//                 method: 'GET',
//                 headers: {
//                     'Authorization': 'Bearer' + token)
//                 }
//                 body: 'grant_type=client_credentials'
//             });
//             const data = await response.json();
        
//             if (!response.ok) {
//               throw new Error('invalid spotify track response, check network tab!');
//             }
        
//             return data;
            
//           } catch (err) {
//             console.log('Error from data retrieval:', err);
//             return [];
//           }
//         };