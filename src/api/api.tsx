import { User } from "../interfaces/user";

const API_URL = 'https://frontend-candidate.dev.sdh.com.ua/v1/contact/'

export const getUsers = () => {
  return (
    fetch(API_URL)
      .then(response => response.json())
  );
};

export function deleteUser(userId: number | undefined) {
  return fetch(`${API_URL}${userId}`, {
    method: 'DELETE',
  });
}

export function addUser({
  first_name, 
  last_name, 
  birth_date, 
  gender,
  job, 
  biography, 
  is_active, 
  id }: Partial<User>): Promise<User> {
  return fetch('https://frontend-candidate.dev.sdh.com.ua/v1/contact/', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json; charset=utf-8',
    },
    body: JSON.stringify({
      first_name, last_name, birth_date, gender, job, biography, is_active, id
    })
  })
    .then(response => response.json());
}

export function getUserById(userId: number) {
  return fetch(`${API_URL}${userId}`)
    .then(response => response.json())
}

export function editUser({
  first_name, 
  last_name, 
  birth_date, 
  gender,
  job, 
  biography, 
  is_active, 
  id }: Partial<User>, userId: number | undefined) {
    return fetch(`${API_URL}${userId}`, {
      method: 'PATCH',
      headers: {
        'Accept':'application/json',
        'Content-type': 'application/json',
      },
      body:JSON.stringify({
        first_name, last_name, birth_date, gender, job, biography, is_active, id
      }) 
  }).then(response => response.json())
    .catch(error => console.log(error))
}