import  z from 'zod';
import express from 'express'
import { Email } from 'cloudflare/resources/radar/email/email';

const app = express();

const userProfileSchema = z.object({
    name: z.string().min(1, {message: "invalid name"}),
    Email: z.string().email(),
    Age: z.number().min(18).optional(),
})

export type userSchema = z.infer<typeof userProfileSchema>;

const testUserInfo = z.string()

export type TypeoftestUserInfo = z.infer<typeof testUserInfo>

app.put('/your/route', (req, res) => {
    const { success } = userProfileSchema.safeParse(req.body);
    const updateBody: userSchema{} 
});

// import z from 'zod';

// const StringZodSchema = z.string()
// type StringZodType = z.infer<typeof StringZodSchema>
