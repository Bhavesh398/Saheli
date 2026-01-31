import * as React from "react";

export interface FileUploadProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export const FileUpload = React.forwardRef<HTMLInputElement, FileUploadProps>(
  ({ label = "Upload Media Files", className = "", ...props }, ref) => {
    return (
      <div className={"flex flex-col gap-2 " + className}>
        {label && <label className="text-sm font-medium text-primary-foreground/90">{label}</label>}
        <input
          type="file"
          ref={ref}
          className="block w-full text-sm text-primary-foreground file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-primary/80 file:text-white hover:file:bg-primary focus:outline-none"
          {...props}
        />
      </div>
    );
  }
);
FileUpload.displayName = "FileUpload";
