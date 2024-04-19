import { cookies } from 'next/headers'
import { expect, test } from 'vitest'
import { z } from 'zod'

import { onSubmit } from './signupapi'

test('TC1-1', async () => {
  const data = {
    email: '',
    password: 'mypassword',
    phone: '0979274474',
  }
  await expect(onSubmit(data)).rejects.toThrowError('Registration Failed.')
})

test('TC1-2', async () => {
  const data = {
    email: 'myoldtest@gmail.com',
    password: 'mypassword',
    phone: '0979274474',
  }
  await expect(onSubmit(data)).rejects.toThrowError('Registration Failed.')
})

test('TC1-3', async () => {
  const data = {
    email: 'mytest3@gmail.com',
    password: 'mypassword',
    phone: '0979274474',
  }
  await expect(onSubmit(data)).resolves.not.toThrow()
})
test('TC1-4', async () => {
  const data = {
    email: 'mytest4@gmail.com',
    password: 'mypassword',
    phone: '0958762543',
  }
  await expect(onSubmit(data)).resolves.not.toThrow()
})
test('TC1-5', async () => {
  const data = {
    email: 'mytest5@gmail.com',
    password: 'mypassword',
    phone: '',
  }
  await expect(onSubmit(data)).rejects.toThrowError('Registration Failed.')
})
test('TC1-6', async () => {
  const data = {
    email: 'mytest6@gmail.com',
    password: 'mypassword',
    phone: '095876254',
  }
  await expect(onSubmit(data)).rejects.toThrowError('Registration Failed.')
})
test('TC1-7', async () => {
  const data = {
    email: 'mytest7@gmail.com',
    password: 'mypassword',
    phone: '09587625434',
  }
  await expect(onSubmit(data)).rejects.toThrowError('Registration Failed.')
})
test('TC1-8', async () => {
  const data = {
    email: 'mytest8@gmail.com',
    password: 'mypassword',
    phone: '095+8762543',
  }
  await expect(onSubmit(data)).rejects.toThrowError('Registration Failed.')
})
test('TC1-9', async () => {
  const data = {
    email: 'mytest9@gmail.com',
    password: '',
    phone: '0958762543',
  }
  await expect(onSubmit(data)).rejects.toThrowError('Registration Failed.')
})
test('TC1-10', async () => {
  const data = {
    email: 'mytest10@gmail.com',
    password: 'mpw',
    phone: '0958762543',
  }
  await expect(onSubmit(data)).rejects.toThrowError('Registration Failed.')
})
