<template>
    
    <div class="w-full h-auto mt-32 mb-24">

        <div class="mx-16">
            <div class="grid grid-cols-1 md:grid-cols-4 gap-8 sm:gap-28 mb-4">
                <text-label>Left Icon</text-label>
                <text-label>Right Icon</text-label>
                <text-label>No Icon</text-label>
                <text-label>Icon Only</text-label>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-4 gap-8 ">
                <!-- <button-text>Primary</button-text> -->
                <button-text-icon leftPadding="pr-1" leftIcon="next-arrow">Action</button-text-icon>
                <button-text-icon rightPadding="pl-1" rightIcon="next-arrow">Action</button-text-icon>
                <button-text>Action</button-text>
                <button-icon iconName="next-arrow"/>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-4 gap-8 mt-16">
                <button-text-icon leftPadding="pr-1" hover="hover:bg-primary-90" leftIcon="arrow" colors="bg-primary-40">Action</button-text-icon>
                <button-text-icon rightPadding="pl-1" hover="hover:bg-primary-90" rightIcon="next-arrow" colors="bg-primary-40">Action</button-text-icon>
                <button-text colors="bg-primary-40" hover="hover:bg-primary-90">Action</button-text>
                <button-icon iconName="next-arrow" hover="hover:bg-primary-90" colors="bg-primary-40" />
            </div>

            <div class="grid grid-cols-1 md:grid-cols-4 gap-8 mt-16">
                <button-text-icon leftPadding="pr-1" leftIcon="arrow" iconColor="#C75100" colors="bg-white text-primary-90" border="border border-primary-90">Action</button-text-icon>
                <button-text-icon rightPadding="pl-1" rightIcon="next-arrow" iconColor="#C75100" colors="bg-white text-primary-90" border="border border-primary-90">Action</button-text-icon>
                <button-text colors="bg-white text-primary-90" iconColor="#C75100" border="border border-primary-90">Action</button-text>
                <button-icon iconName="next-arrow" iconColor="#C75100" colors="bg-white text-primary-90" border="border border-primary-90" />
            </div>

            <div class="grid grid-cols-1 md:grid-cols-4 gap-8 mt-16">
                <button-text-icon hover="hover:bg-primary-90" leftPadding="pr-1" leftIcon="arrow" iconColor="#C75100" colors="bg-white text-primary-90" border="border border-primary-90">Action</button-text-icon>
                <button-text-icon hover="hover:bg-primary-90" rightPadding="pl-1" rightIcon="next-arrow" iconColor="#C75100" colors="bg-white text-primary-90" border="border border-primary-90">Action</button-text-icon>
                <button-text hover="hover:bg-primary-90" colors="bg-white text-primary-90" iconColor="#C75100" border="border border-primary-90">Action</button-text>
                <button-icon hover="hover:bg-primary-90" iconName="next-arrow" iconColor="#C75100" colors="bg-white text-primary-90" border="border border-primary-90" />
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-2 mt-12">
                
                <alert-action class="max-w-[700px]">
                    <template #content >
                        <text-label class="mt-1 font-normal" textColor="text-secondary-600">This is a paragraph of information with additional supporting detail or links to help the user understand what they should do.</text-label>
                    </template>
                    <template #footer >
                        <button-text colors="bg-white text-primary-90" iconColor="#C75100" border="border border-primary-90">Action</button-text>
                        <button-text>Action</button-text>
                    </template>
                </alert-action>

                <alert-action borderTheme="border border-red-80" iconTheme="#CC3123" class="max-w-[700px] text-red-100" bgTheme="bg-red-00">
                    <template #content >
                        <text-label class="mt-1 font-normal" textColor="text-secondary-600">This is a paragraph of information with additional supporting detail or links to help the user understand what they should do.</text-label>
                    </template>
                    <template #footer >
                        <button-text colors="bg-white text-red-80" border="border border-red-80">Action</button-text>
                        <button-text colors="bg-red-80 text-white">Action</button-text>
                    </template>
                </alert-action>

                <alert-action iconName="warning" borderTheme="border border-primary-80" iconTheme="#DC5A00" class="max-w-[700px]" bgTheme="bg-primary-05">
                    <template #content >
                        <text-label class="mt-1 font-normal" textColor="text-secondary-600">This is a paragraph of information with additional supporting detail or links to help the user understand what they should do.</text-label>
                    </template>
                    <template #footer >
                        <button-text colors="bg-white text-primary-80" border="border border-primary-80">Action</button-text>
                        <button-text colors="bg-primary-90 text-white">Action</button-text>
                    </template>
                </alert-action>

                <alert-action iconName="success" borderTheme="border border-green-80" iconTheme="#008700" class="max-w-[700px]" bgTheme="bg-green-00">
                    <template #content >
                        <text-label class="mt-1 font-normal" textColor="text-secondary-600">This is a paragraph of information with additional supporting detail or links to help the user understand what they should do.</text-label>
                    </template>
                    <template #footer >
                        <button-text colors="bg-white text-green-80" border="border border-green-80">Action</button-text>
                        <button-text colors="bg-green-80 text-white">Action</button-text>
                    </template>
                </alert-action>

            </div>

            <text-label class="mt-12 mb-2">Content only</text-label>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-2">
                
                <alert-action :titleVisible="false" :footerVisible="false" bgTheme="text-red-500" class="max-w-[700px]" theme="bg-blue-00">
                    <template #content >
                        <div class="flex justify-between">
                            <text-label class="flex font-semibold">
                                <icon name="info" width="28" height="28" viewBox="0 0 28 28" class="mr-2" textColor="#fff" fillColor="#2C75DD"  />
                                A short descriptive header 
                            </text-label>
                            <icon class="justify-end" name="close" width="14" height="14" viewBox="0 0 14 14" textColor="#566271"  />
                        </div>
                        
                    </template>
                </alert-action>

                <alert-action :titleVisible="false" :footerVisible="false" borderTheme="border border-red-80" bgTheme="bg-red-00" class="max-w-[700px]">
                    <template #content >
                        <div class="flex justify-between">
                            <text-label class="flex font-semibold">
                                <icon name="info" width="28" height="28" viewBox="0 0 28 28" class="mr-2" textColor="#fff" fillColor="#CC3123"  />
                                A short descriptive header 
                            </text-label>
                            <icon class="justify-end" name="close" width="14" height="14" viewBox="0 0 14 14" textColor="#566271"  />
                        </div>
                        
                    </template>
                </alert-action>

                <alert-action :titleVisible="false" :footerVisible="false" borderTheme="border border-primary-80" bgTheme="bg-primary-05" class="max-w-[700px]">
                    <template #content >
                        <div class="flex justify-between">
                            <text-label class="flex font-semibold">
                                <icon name="warning" width="28" height="28" viewBox="0 0 28 28" class="mr-2" textColor="#fff" fillColor="#DC5A00"  />
                                A short descriptive header 
                            </text-label>
                            <icon class="justify-end" name="close" width="14" height="14" viewBox="0 0 14 14" textColor="#566271"  />
                        </div>
                        
                    </template>
                </alert-action>

                <alert-action :titleVisible="false" :footerVisible="false" borderTheme="border border-green-80" bgTheme="bg-green-00" class="max-w-[700px]">
                    <template #content >
                        <div class="flex justify-between">
                            <text-label class="flex font-semibold">
                                <icon name="info" width="28" height="28" viewBox="0 0 28 28" class="mr-2" textColor="#fff" fillColor="#008700"  />
                                A short descriptive header 
                            </text-label>
                            <icon class="justify-end" name="close" width="14" height="14" viewBox="0 0 14 14" textColor="#566271"  />
                        </div>
                        
                    </template>
                </alert-action>
            </div>

            <text-label class="mt-12 mb-2">Title and Content</text-label>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-2">
                
                <alert-action :footerVisible="false" bgTheme="text-red-500" class="max-w-[700px] border-blue-60 text-red-100">
                    <template #content >
                        <text-label class="mt-1 font-normal" textColor="text-secondary-600">This is a paragraph of information with additional supporting detail or links to help the user understand what they should do.</text-label>
                    </template>
                </alert-action>

                <alert-action :footerVisible="false" borderTheme="border border-red-80" iconTheme="#CC3123" class="max-w-[700px] text-red-100" bgTheme="bg-red-00">
                    <template #content >
                        <text-label class="mt-1 font-normal" textColor="text-secondary-600">This is a paragraph of information with additional supporting detail or links to help the user understand what they should do.</text-label>
                    </template>
                </alert-action>

                <alert-action :footerVisible="false" iconName="warning" borderTheme="border border-primary-80" iconTheme="#DC5A00" class="max-w-[700px]" bgTheme="bg-primary-05">
                    <template #content >
                        <text-label class="mt-1 font-normal" textColor="text-secondary-600">This is a paragraph of information with additional supporting detail or links to help the user understand what they should do.</text-label>
                    </template>
                </alert-action>

                <alert-action :footerVisible="false" iconName="success" borderTheme="border border-green-80" iconTheme="#008700" class="max-w-[700px]" bgTheme="bg-green-00">
                    <template #content >
                        <text-label class="mt-1 font-normal" textColor="text-secondary-600">This is a paragraph of information with additional supporting detail or links to help the user understand what they should do.</text-label>
                    </template>
                </alert-action>
            </div>

            <text-label class="mt-12 mb-2">Title only</text-label>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-2">
                
                <alert-action :footerVisible="false" class="max-w-[700px] border-blue-60 text-red-100"  />
                <alert-action :footerVisible="false" borderTheme="border border-red-80" iconTheme="#CC3123" class="max-w-[700px] text-red-100" bgTheme="bg-red-00" />
                <alert-action :footerVisible="false" iconName="warning" borderTheme="border border-primary-80" iconTheme="#DC5A00" class="max-w-[700px]" bgTheme="bg-primary-05" />
                <alert-action :footerVisible="false" iconName="success" borderTheme="border border-green-80" iconTheme="#008700" class="max-w-[700px]" bgTheme="bg-green-00" />
            </div>

        </div>
        
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import TextLabel from '@/components/core/label/TextLabel.vue';
import ButtonTextIcon from '@/components/core/button/ButtonTextIcon.vue';
import ButtonText from '@/components/core/button/ButtonText.vue';
import ButtonIcon from '@/components/core/button/ButtonIcon.vue';
import AlertAction from '@/components/core/alert/AlertAction.vue';
import Icon from "@/components/core/icon/Icon.vue";


export default defineComponent({
    name: "DashboardView",
    components: { 
        TextLabel,
        ButtonTextIcon,
        ButtonText,
        ButtonIcon,
        AlertAction,
        Icon
    }
})
</script>
