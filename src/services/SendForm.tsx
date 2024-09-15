interface FormDataItem {
    position: number;
    question: string;
    answer: string;
}

interface FormData {
    form_data: FormDataItem[];
}


export const sendPostRequest = async (data: FormData) => {
    try {
        // Envía los datos a la API
        const apiResponse = await fetch('https://da5cms9i64.execute-api.us-west-2.amazonaws.com/dev/api/personal-plan', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data) // Convierte el objeto data a una cadena JSON
        });

    if (!apiResponse.ok) {
      throw new Error('Network response was not ok');
    }

    const responseData = await apiResponse.json();
    console.log('Success:', responseData);
  } catch (error) {
    console.error('Error:', error);
  }
};
