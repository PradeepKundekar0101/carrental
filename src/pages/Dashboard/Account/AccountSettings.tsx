import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Info, Check, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { passwordSchema } from "../../../schemas/passwordSchema";
import { emailSchema } from "../../../schemas/emailSchema";
import { z } from "zod";
import {
  PasswordRequirements,
  PasswordRequirementProps,
} from "../../../types/types";

type EmailFormData = z.infer<typeof emailSchema>;
type PasswordFormData = z.infer<typeof passwordSchema>;

const PasswordRequirement: React.FC<PasswordRequirementProps> = ({
  meets,
  label,
}) => (
  <div className="flex items-center space-x-2 text-sm">
    {meets ? (
      <Check className="w-4 h-4 text-green-500" />
    ) : (
      <X className="w-4 h-4 text-red-500" />
    )}
    <span className={meets ? "text-green-700" : "text-red-700"}>{label}</span>
  </div>
);

const AccountSettings: React.FC = () => {
  const [passwordRequirements, setPasswordRequirements] =
    useState<PasswordRequirements>({
      length: false,
      uppercase: false,
      number: false,
      special: false,
    });
  const [isPasswordFocused, setIsPasswordFocused] = useState<boolean>(false);

  const emailForm = useForm<EmailFormData>({
    resolver: zodResolver(emailSchema),
  });

  const passwordForm = useForm<PasswordFormData>({
    resolver: zodResolver(passwordSchema),
  });

  const handleEmailSubmit = async (data: EmailFormData): Promise<void> => {
    try {
      console.log("Email update data:", data);
    } catch (error) {
      console.error("Error updating email:", error);
    }
  };

  const handlePasswordSubmit = async (
    data: PasswordFormData
  ): Promise<void> => {
    try {
      console.log("Password update data:", data);
    } catch (error) {
      console.error("Error updating password:", error);
    }
  };

  const handleDeleteAccount = async (): Promise<void> => {
    try {
      console.log("Account deleted");
    } catch (error) {
      console.error("Error deleting account:", error);
    }
  };

  const checkPasswordRequirements = (password: string): void => {
    setPasswordRequirements({
      length: password.length >= 8,
      uppercase: /[A-Z]/.test(password),
      number: /[0-9]/.test(password),
      special: /[^A-Za-z0-9]/.test(password),
    });
  };

  return (
    <div className="w-full mx-auto space-y-6">
      <Card>
        <CardContent className="p-6 space-y-8">
          <form
            onSubmit={emailForm.handleSubmit(handleEmailSubmit)}
            className="space-y-4"
          >
            <h3 className="text-2xl font-semibold">Change your email</h3>
            <div className="space-y-2">
              <Label htmlFor="newEmail" className="text-base">
                New email
              </Label>
              <Input
                id="newEmail"
                type="email"
                {...emailForm.register("newEmail")}
                className={
                  emailForm.formState.errors.newEmail ? "border-red-500" : ""
                }
              />
              {emailForm.formState.errors.newEmail && (
                <p className="text-red-500 text-sm">
                  {emailForm.formState.errors.newEmail.message}
                </p>
              )}
            </div>
            <div className="space-y-2">
              <Label htmlFor="currentPassword" className="text-base">
                Current password
              </Label>
              <Input
                id="currentPassword"
                type="password"
                {...emailForm.register("currentPassword")}
                className={
                  emailForm.formState.errors.currentPassword
                    ? "border-red-500"
                    : ""
                }
              />
              <div className="flex items-center space-x-2 text-sm text-gray-500">
                <Info className="w-4 h-4" />
                <a href="#" className="hover:underline text-base">
                  Forgot your password?
                </a>
              </div>
            </div>
            <Button type="submit" className="text-white text-base">
              Change your email
            </Button>
          </form>

          <form
            onSubmit={passwordForm.handleSubmit(handlePasswordSubmit)}
            className="space-y-4"
          >
            <h3 className="text-2xl mt-12 font-semibold">
              Change your password
            </h3>
            <div className="space-y-2">
              <Label htmlFor="oldPassword" className="text-base">
                Old password
              </Label>
              <Input
                id="oldPassword"
                type="password"
                {...passwordForm.register("oldPassword")}
                className={
                  passwordForm.formState.errors.oldPassword
                    ? "border-red-500"
                    : ""
                }
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="newPassword" className="text-base">
                New password
              </Label>
              <Input
                id="newPassword"
                type="password"
                {...passwordForm.register("newPassword")}
                className={
                  passwordForm.formState.errors.newPassword
                    ? "border-red-500"
                    : ""
                }
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  passwordForm.register("newPassword").onChange(e);
                  checkPasswordRequirements(e.target.value);
                }}
                onFocus={() => setIsPasswordFocused(true)}
                onBlur={() => setIsPasswordFocused(false)}
              />
              <AnimatePresence>
                {(isPasswordFocused || passwordForm.watch("newPassword")) && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.2 }}
                    className="mt-2 space-y-1 text-sm bg-gray-50 p-3 rounded-md border border-gray-200"
                  >
                    <h4 className="font-medium text-gray-700 mb-2">
                      Password requirements:
                    </h4>
                    <PasswordRequirement
                      meets={passwordRequirements.length}
                      label="At least 8 characters"
                    />
                    <PasswordRequirement
                      meets={passwordRequirements.uppercase}
                      label="Contains uppercase letter"
                    />
                    <PasswordRequirement
                      meets={passwordRequirements.number}
                      label="Contains number"
                    />
                    <PasswordRequirement
                      meets={passwordRequirements.special}
                      label="Contains special character"
                    />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            <div className="space-y-2">
              <Label htmlFor="confirmPassword" className="text-base">
                Confirm password
              </Label>
              <Input
                id="confirmPassword"
                type="password"
                {...passwordForm.register("confirmPassword")}
                className={
                  passwordForm.formState.errors.confirmPassword
                    ? "border-red-500"
                    : ""
                }
              />
              {passwordForm.formState.errors.confirmPassword && (
                <p className="text-red-500 text-sm">
                  {passwordForm.formState.errors.confirmPassword.message}
                </p>
              )}
            </div>
            <Button type="submit" className="text-base text-white">
              Change your password
            </Button>
          </form>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Delete your account</h3>
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button className="text-red-700 bg-red-100 hover:bg-red-200 transition-colors duration-200">
                  Delete your account
                </Button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle className="text-xl">
                    Caution
                  </AlertDialogTitle>
                  <AlertDialogDescription className="text-base">
                    This action is irreversible. If you're a car owner, please
                    make sure that you don't have any upcoming transfers and
                    please export your payment history. Are you sure you want to
                    delete your account?
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                  <AlertDialogAction
                    onClick={handleDeleteAccount}
                    className="bg-red-500/20 hover:bg-red-300 text-base transition-colors duration-200"
                  >
                    Delete your account
                  </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AccountSettings;
