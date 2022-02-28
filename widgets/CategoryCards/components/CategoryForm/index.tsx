import {Col, Form, Input, Row} from "antd";
import {CategoryFormProps} from "./interfaces";
import {FC, useEffect} from "react";
import * as yup from 'yup'
import {CategoryType} from "../../../../data-structures/definitions/categories";
import {Controller, useForm} from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';

const CreateUpdateCategorySchema = yup.object().shape({
    category_name: yup.string()
        .required('Required')
        .min(3, 'Enter a valid category name (min. 3 chars.)'),
});

const getValues = (values: CategoryType | null) =>
    ({
        id: values?.id ?? null,
        category_name: values?.category_name ?? "",
        category_slug: values?.category_slug ?? "",
        icon: values?.icon ?? "",
        color: values?.color ?? "",
    })

const CategoryForm: FC<CategoryFormProps> = ({category}) => {
    const { handleSubmit, control, reset, formState: {errors}} = useForm({
        mode: 'onSubmit',
        reValidateMode: 'onChange',
        defaultValues: {...getValues(null)},
        context: undefined,
        criteriaMode: "firstError",
        shouldFocusError: true,
        shouldUnregister: false,
        shouldUseNativeValidation: false,
        delayError: undefined,
        resolver: yupResolver(CreateUpdateCategorySchema)
    })

    useEffect(() => {
        if (category) {
            reset(getValues(category))
        }else{
            reset(getValues(null))
        }
    }, [JSON.stringify(category)])


    const onSubmit = (data: any) => {
        console.log(data);
    };

    return (

        <Row gutter={16}>
            <Col span={24}>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Controller
                        control={control}
                        name="category_name"
                        render={({field}) =>
                            <Form.Item
                                label="Category name: "
                                validateStatus={!!errors?.category_name?"error":""}
                                help={!!errors.category_name?errors.category_name.message:""}

                            >
                                <Input name="category_name" onChange={field.onChange} value={field.value}/>
                            </Form.Item>
                        }
                    />
                </form>
            </Col>
            <Col span={24}>

            </Col>
        </Row>
    )
}

export default CategoryForm